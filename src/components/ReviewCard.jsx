const ReviewCard = ({ review }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <p className="card-text">“{review.content || 'Testo della recensione di esempio...'}”</p>
        <p className="fw-bold">Voto: {review.vote || 5}</p>
        <p className="text-muted mb-0">
          <i>By {review.author || 'Utente anonimo'}</i>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
