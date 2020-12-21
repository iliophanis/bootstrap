using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Common.Interfaces;
using Application.Common.Models;
using Application.Common.Validators;
using AutoMapper;
using Domain.Common;
using FluentValidation;
using MediatR;
using MongoDB.Driver;
using Domain.Entities.Requests;
using Domain.Enums;
using MongoDB.Bson;
using Domain.Entities.Pets;

namespace Application.Requests.Queries
{
    public class PageRequest
    {
        #region Query
        public class Query : IRequest<Envelope<RequestDto>>
        {
            public string requestType { get; set; }
            public PageParameters PageParameters { get; set; }
        }
        #endregion

        #region Validator            
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.PageParameters).ValidPageParams(typeof(RequestDto));
            }
        }
        #endregion

        #region Handler
        public class Handler : IRequestHandler<Query, Envelope<RequestDto>>
        {
            private readonly IContext _context;
            private readonly IMapper _mapper;

            private readonly ICurrentUserService _currentUserService;
            public Handler(IContext context, IMapper mapper, ICurrentUserService currentUserService)
            {
                _context = context;
                _mapper = mapper;
                _currentUserService = currentUserService;
            }
            public async Task<Envelope<RequestDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var requestTypeFilter = RequestTypeFilter(_currentUserService.UserId, _currentUserService.IsAuthenticated, request.requestType);
                var filter = requestTypeFilter & RequestFilter(request.PageParameters.Age, request.PageParameters.Size, request.PageParameters.Specie, request.PageParameters.Filter);
                var pagedRequests = await _context.GetEnvelopeAsync(_context.Requests, filter, request.PageParameters);

                var requestsDtoEnvelope = new Envelope<RequestDto>()
                {
                    Items = _mapper.Map<List<RequestDto>>(pagedRequests.Items),
                    TotalSize = pagedRequests.TotalSize
                };

                return requestsDtoEnvelope;
            }
            private FilterDefinition<Request> RequestTypeFilter(string userId, bool isAuth, string requestType)
            {
                var query = Builders<Request>.Filter.Empty;
                if (requestType == "user" && isAuth)
                {
                    query = query & Builders<Request>.Filter.Eq(r => r.UserId, userId);
                }
                else
                {
                    RequestType enumRequestType = (RequestType)Enum.Parse(typeof(RequestType), requestType);
                    query = query & Builders<Request>.Filter.Eq(r => r.Type, enumRequestType);
                }
                return query;
            }

            private FilterDefinition<Request> RequestFilter(string age, string size, string specie, string filter)
            {
                var query = Builders<Request>.Filter.Empty;
                if (!string.IsNullOrEmpty(age))
                {
                    Age enumAge = (Age)Enum.Parse(typeof(Age), age);
                    query = query & Builders<Request>.Filter.ElemMatch(r => r.Pets, p => p.Age == enumAge);

                }
                if (!string.IsNullOrEmpty(size))
                {
                    Size enumSize = (Size)Enum.Parse(typeof(Size), size);
                    query = query & Builders<Request>.Filter.ElemMatch(r => r.Pets, p => p.Size == enumSize);

                }
                if (!string.IsNullOrEmpty(specie))
                {
                    Specie enumSpecie = (Specie)Enum.Parse(typeof(Specie), specie);
                    query = query & Builders<Request>.Filter.ElemMatch(r => r.Pets, p => p.Specie == enumSpecie);

                }
                if (!string.IsNullOrEmpty(filter))
                {
                    query = query & Builders<Request>.Filter.Regex(r => r.Location.City, new BsonRegularExpression(filter, "i")) |
                                     Builders<Request>.Filter.Regex(x => x.Location.Street, new BsonRegularExpression(filter, "i")) |
                                     Builders<Request>.Filter.Regex(x => x.Location.PostCode, new BsonRegularExpression(filter, "i")) |
                                     Builders<Request>.Filter.ElemMatch(r => r.Pets, Builders<Pet>.Filter.Regex(p => p.Name, new BsonRegularExpression(filter, "i")));
                }
                return query;
            }
        }
        #endregion
    }
}