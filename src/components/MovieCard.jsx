import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src=""
          className="card-img-top"
          alt="Titolo film"
        />
        <div className="card-body">
          <h5 className="card-title">Titolo film</h5>
          <p className="card-text text-muted">
            <i>Regista</i>
          </p>
          <p className="card-text">
            Breve descrizione del film in questa sezione. 
          </p>
          <Link to="/movie/1" className="btn btn-primary">
            Vedi dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;