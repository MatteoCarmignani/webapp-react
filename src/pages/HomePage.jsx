import MovieCard from "../components/MovieCard"

const HomePage = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">Movie Collection</h1>
        <h5 className="text-muted"><i>The best movies around the world</i></h5>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <MovieCard />
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