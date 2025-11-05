import { Link } from "react-router-dom";

const MovieCard = ({ movieProp }) => {
  const { id, title, director, genre, release_year, abstract, image } = movieProp;

  return (
    <div className="card mb-4">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <address><i>{director}</i></address>
        <p className="card-text">{abstract}</p>
        <p className="card-text">
          Genere: {genre} — Anno: {release_year}
        </p>
        <Link to={`/movies/${id}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
