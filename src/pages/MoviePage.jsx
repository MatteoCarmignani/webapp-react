// import di router-dom per link
import { Link } from "react-router-dom"

// import comp singola review
import ReviewCard from "../components/ReviewCard"

// creazione componente Header
const MoviePage = () => {
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <h1>Titolo film</h1>
                <h3 className="text-muted"><i>By regista</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default MoviePage