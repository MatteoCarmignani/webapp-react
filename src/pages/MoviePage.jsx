import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nella chiamata Axios:", err);
        setLoading(false);
      });
  }, [id]);

  // 👇 funzione per aggiungere una recensione appena inviata
  const handleNewReview = (newReview) => {
    setMovie((prev) => ({
      ...prev,
      reviews: [...(prev.reviews || []), newReview],
    }));
  };

  if (loading) {
    return <div className="text-center mt-5">Caricamento in corso...</div>;
  }

  if (!movie) {
    return <div className="text-center mt-5 text-danger">Film non trovato</div>;
  }

  return (
    <div className="container my-5">
      {/* Dettagli del film */}
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow-sm"
            style={{
              maxHeight: "350px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-md-8">
          <h1 className="mb-3 fw-bold">{movie.title}</h1>
          <p><strong>Regista:</strong> {movie.director}</p>
          <p><strong>Anno:</strong> {movie.release_year}</p>
          <p><strong>Genere:</strong> {movie.genre}</p>
          <p className="mt-4">{movie.abstract}</p>
        </div>
      </div>

      {/* Sezione recensioni */}
      <div className="mt-5">
        <h3 className="mb-4 border-bottom pb-2">Recensioni</h3>
        {movie.reviews && movie.reviews.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {movie.reviews.map((r, index) => (
              <div className="col" key={index}>
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        ) : (
          <p>Nessuna recensione per questo film.</p>
        )}
      </div>

      {/* Form per aggiungere recensione */}
      <div className="mt-5 border-top pt-4">
        <ReviewForm movieId={id} onReviewAdded={handleNewReview} />
      </div>

      {/* Pulsante per tornare alla home */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-primary rounded-pill px-4">
          ⬅️ Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default MoviePage;
