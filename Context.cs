using System.Linq;
using System.Threading.Tasks;
using Application.Common.Interfaces;
using Application.Common.Models;
using Domain.Common;
using Domain.Entities;
using Domain.Entities.Requests;
using Infrastructure.Persistence.Config.ClassMaps;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

namespace Infrastructure.Persistence
{
    public class Context : IContext
    {
        public IMongoCollection<ApplicationUser> Users { get; set; }
        public IMongoCollection<Request> Requests { get; set; }
        public IMongoCollection<InfoTag> InfoTags { get; set; }

        private IMongoClient Client { get; set; }
        private IMongoDatabase Database { get; set; }

        public IGridFSBucket DatabaseFs { get; set; }
        private MongoUrl Url { get; set; }

        public Context(string connectionString, string databaseString)
        {
            Context.Init();

            Url = new MongoUrl(connectionString);
            Client = new MongoClient(Url);
            Database = Client.GetDatabase(databaseString);
            DatabaseFs = new GridFSBucket(Database);
            Users = Database.GetCollection<ApplicationUser>("users");
            Requests = Database.GetCollection<Request>("requests");
            InfoTags = Database.GetCollection<InfoTag>("infotags");
        }

        public static void Init()
        {
            BsonClassMap.RegisterClassMap(new ApplicationUserClassMap());
            BsonClassMap.RegisterClassMap(new BaseEntityClassMap());
            BsonClassMap.RegisterClassMap(new InfoTagClassMap());
            BsonClassMap.RegisterClassMap(new LocationClassMap());
            BsonClassMap.RegisterClassMap(new PetClassMap());
            BsonClassMap.RegisterClassMap(new RequestClassMap());
        }

        public async Task<Envelope<T>> GetEnvelopeAsync<T>(IMongoCollection<T> collection, FilterDefinition<T> filter, PageParameters pageParams)
        {
            var countFacet = AggregateFacet.Create("count",
                PipelineDefinition<T, AggregateCountResult>
                .Create(new[] {
                    PipelineStageDefinitionBuilder.Count<T> ()
                }));

            var dataFacet = AggregateFacet.Create("data",
                PipelineDefinition<T, T>
                .Create(new[] {
                    (pageParams.IsAscend) ? PipelineStageDefinitionBuilder.Sort (Builders<T>.Sort.Ascending (pageParams.SortBy)):
                        PipelineStageDefinitionBuilder.Sort (Builders<T>.Sort.Descending (pageParams.SortBy)),
                        PipelineStageDefinitionBuilder.Skip<T> ((pageParams.PageNumber - 1) * pageParams.PageSize),
                        PipelineStageDefinitionBuilder.Limit<T> (pageParams.PageSize)
                }));
            var aggregation = await collection.Aggregate()
                .Match(filter)
                .Facet(countFacet, dataFacet)
                .ToListAsync();

            var count = (aggregation.FirstOrDefault()
                .Facets.FirstOrDefault(x => x.Name == "count")
                .Output<AggregateCountResult>()
                .FirstOrDefault() ?? new AggregateCountResult(0)).Count;

            var data = aggregation.FirstOrDefault()
                .Facets.FirstOrDefault(x => x.Name == "data")
                .Output<T>()
                .ToList();
            var totalPages=(int)Match.Ceiling(count/(double)pageParams.PageSize);
            var hasPreviousPage =pageParams.PageNumber > 1;
            var hasNextPage = pageParams.PageNumber < totalPages;
            var envelope = new Envelope<T>()
            {
                Items = data,
                TotalSize = count
                TotalPages=totalPages
                HasPreviousPage=HasPreviousPage
                HasNextPage=hasNextPage
            };

            return envelope;
        }


    }
}