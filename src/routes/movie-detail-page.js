import { useLoaderData } from "react-router-dom";

export default () => {
  const { movie } = useLoaderData();
  console.log("movie", movie);

  if (movie) {
    return movie.title;
  }
};
