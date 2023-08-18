import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/card.js";

export default function MovieListPage() {
  const { movies } = useLoaderData();

  console.log("movies", movies);
  return (
    <>
      <div class="grid">
        {!movies
          ? null
          : movies.results.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </>
  );
}
