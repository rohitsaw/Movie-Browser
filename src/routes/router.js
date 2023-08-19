import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieListPage from "./movie-list-page";

import RootPage from "./root-page.js";
import MovieDetailPage from "./movie-detail-page.js";
import ErrorPage from "./error-page";
import { Provider } from "react-redux";
import store from "../redux/store.js";

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
        },
        {
          path: "movies/:movieId",
          element: <MovieDetailPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
