import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/movies")
      .then((res) => {
        console.log("Dati ricevuti:", res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error("Errore caricamento film:", err));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5 fw-bold">
        🎬 Film disponibili
      </h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {movies.map((m) => (
          <div className="col" key={m.id}>
            <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
              
              {/* Immagine centrata e proporzionata */}
              <div
                className="card-img-top d-flex align-items-center justify-content-center bg-light"
                style={{ height: "350px", overflow: "hidden" }}
              >
                <img
                  src={m.image}
                  alt={m.title}
                  className="img-fluid"
                  style={{
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Corpo card */}
              <div className="card-body d-flex flex-column text-center p-4">
                <h5 className="card-title fw-bold mb-3">{m.title}</h5>
                <p className="text-muted mb-4">
                  <strong>Genere:</strong> {m.genre} <br />
                  <strong>Anno:</strong> {m.release_year}
                </p>

                <Link
                  to={`/movies/${m.id}`}
                  className="btn btn-outline-primary mt-auto fw-semibold"
                >
                  Scopri di più →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
