import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

const MoviePage = () => {
  return (
    <>
      <header className="border-bottom border-2 pb-3 mb-4">
        <h1 className="fw-bold">Titolo film</h1>
        <h5 className="text-muted"><i>By regista</i></h5>
        <p>Descrizione del film o trama breve qui.</p>
      </header>

      <section id="reviews" className="mb-4">
        <header className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-semibold">Community Reviews</h4>
        </header>

        <ReviewCard />

      </section>

      <footer className="border-top pt-3 mt-4 d-flex justify-content-end">
        <Link className="btn btn-outline-secondary" to="/">
          Back to home
        </Link>
      </footer>
    </>
  )
}

export default MoviePage
