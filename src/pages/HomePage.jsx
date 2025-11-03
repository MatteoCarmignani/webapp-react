// import comp card libro
import MovieCard from "../components/MovieCard"


// creazione componente Header
const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Movie</h1>
            <h2><i>The best movie in the world</i></h2>
            <div className="row row-cols-3 mt-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>

    )
}

export default HomePage