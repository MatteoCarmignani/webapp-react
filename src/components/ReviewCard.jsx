import axios from "axios";

function ReviewCard({ review, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Sei sicuro di voler eliminare questa recensione?")) {
      try {
        await axios.delete(`http://localhost:3001/api/movies/${review.movie_id}/review`);
        if (onDelete) onDelete(review.id); // aggiorna la lista nel genitore
      } catch (err) {
        console.error("Errore eliminazione recensione:", err);
        alert("Errore durante l'eliminazione della recensione.");
      }
    }
  };

  return (
    <div className="card shadow-sm p-3 h-100 position-relative">
      <blockquote className="blockquote mb-3 text-muted">
        “{review.text}”
      </blockquote>
      <p className="fw-bold">Voto: {review.vote}</p>
      <footer className="blockquote-footer">
        By <cite>{review.name || "Utente anonimo"}</cite>
      </footer>
      
    </div>
  );
}

export default ReviewCard;


