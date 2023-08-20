import MovieCard from "../components/card.js";
import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieListPage() {
  const { error, movies, isLoading } = useSelector((state) => {
    return {
      movies:
        state.searchQuery.length > 0
          ? state.searchMoviesList
          : state.upcomingMoviesList,
      isLoading: state.isLoading,
      error:
        state.searchQuery.length > 0
          ? state.searchMovieError
          : state.upcomingMovieError,
    };
  });

  return (
    <>
      <div class="grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      {error ? (
        <div className="no-more-movie">{error}</div>
      ) : (
        <div>{isLoading && <LinearProgress />}</div>
      )}
    </>
  );
}
