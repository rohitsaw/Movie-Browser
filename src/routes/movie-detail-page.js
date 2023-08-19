import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { getSingleMovieDetails } from "../redux/action.js";
import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import ProgressiveImg from "../components/progressiveImg";
import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();

  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getSingleMovieDetails(movieId));
  }, []);

  const { movie, isLoading, error } = useSelector((state) => {
    return {
      movie: state.selectedMovie,
      isLoading: state.isLoading,
      error: state.error,
    };
  });

  if (isLoading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  } else if (error || !movie) {
    return <div className="no-more-movie">{error}</div>;
  } else {
    const url = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    const title = movie.title ?? "N/A";
    const rating = Number(movie.vote_average) / 2;
    const overview = movie.overview ?? "N/A";
    const director =
      movie.credits.crew.find((each) => each.job === "Director")?.name ?? "N/A";
    const actors = movie.credits.cast.map((each) => each.name).join(",");
    const year = movie.release_date.split("-").at(0);
    const length = formatRunTime(movie.runtime);

    return (
      <div className="movie-container">
        <ProgressiveImg src={url} alt="movie thumbnail" />
        <div className="movie-detail-container">
          <div>
            <Typography variant="h5">{title}</Typography>
            <Rating name="read-only" value={Number(rating) / 2} readOnly />
          </div>
          <Typography variant="subtitle1">
            {year} | {length} | {director} |
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Casts:</strong> {actors || "N/A"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Description:</strong> {overview || "N/A"}
          </Typography>
        </div>
      </div>
    );
  }
};

const formatRunTime = (minute) => {
  let m = minute % 60;
  let h = (minute - m) / 60;
  let hhmm =
    (h < 10 ? "0" : "") +
    h.toString() +
    ":" +
    (m < 10 ? "0" : "") +
    m.toString();
  return hhmm;
};
