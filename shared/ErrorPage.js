const DEBUG = process.env.NODE_ENV !== 'production'

function ErrorStack({ error }) {
  return (
    <details
      className="mt-5 p-2 w-75 border border-muted rounded"
      style={{ whiteSpace: 'pre-wrap' }}>
      <summary className="text-center text-danger border-0">
        Error Stack
      </summary>
      {error.stack}
    </details>
  )
}

function ErrorPage({ error }) {
  return (
    <div className="d-flex h-100 w-100 flex-column justify-content-center align-items-center">
      <i className="fa fa-4x fa-exclamation-circle mr-3 text-danger" />
      <p className="mt-4 lead text-danger">{error.message}</p>
      <p className="mt-4 w-75 text-center">
        Σε περίπτωση που δεν γνωρίζετε γιατί σας εμφανίζεται αυτό το μήνυμα ή
        θεωρείτε ότι πρόκειται για σφάλμα του συστήματος και όχι αποτέλεσμα
        κακής χρήσης, επικοινωνήστε με το Τμήμα Υποστήριξης Εφαρμογής του φορέα
        σας.
      </p>
      {DEBUG && <ErrorStack error={error} />}
    </div>
  )
}

export default ErrorPage
