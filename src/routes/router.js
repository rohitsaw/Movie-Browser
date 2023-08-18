import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieListPage from "./movie-list-page";

import RootPage from "./root-page.js";
import MovieDetailPage from "./movie-detail-page.js";
import ErrorPage from "./error-page";

import { discoverUpcomingMovies, getMovieById } from "../queries/query";

export default () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <MovieListPage />,
          loader: async () => {
            const res = await discoverUpcomingMovies();
            res.data.results = res.data.results.filter(
              (each) => each.poster_path !== null && each.overview.length > 0
            );
            return { movies: res.data };
          },
        },
        {
          path: "movies/:movieId",
          element: <MovieDetailPage />,
          loader: async ({ params }) => {
            const res = await getMovieById(params.movieId);
            return { movie: res.data };
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
