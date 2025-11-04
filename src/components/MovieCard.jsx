import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <img
          src="https://via.placeholder.com/400x250?text=Movie+Poster"
          className="card-img-top rounded-top"
          alt="Titolo film"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">Titolo film</h5>
          <p className="card-text text-muted">
            <i>Regista</i>
          </p>
          <p className="card-text">
            Breve descrizione del film in questa sezione.
          </p>
        </div>
        <div className="card-footer bg-transparent border-0">
          <Link to="/movies/1" className="btn btn-primary w-100">
            Vedi dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
