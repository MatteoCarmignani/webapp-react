const ReviewCard = () => {
  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="card-body">
        <p className="card-text">
          “Testo della recensione di esempio qui...”
        </p>
        <strong>Vote: 5</strong>
        <p className="text-muted mb-0">
          <i>By nome utente</i>
        </p>
      </div>
    </div>
  )
}

export default ReviewCard
