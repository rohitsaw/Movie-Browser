import axios from "axios";


const axios_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: { Authorization: "Bearer " + access_token },
});

const discoverUpcomingMovies = async () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tomorrow = date.toISOString().split("T").at(0);
  const url = `discover/movie?page=1`;
  return axios_instance.get(url, {
    params: {
      sort_by: "primary_release_date.asc",
      "primary_release_date.gte": tomorrow,
      include_adult: false,
    },
  });
};

const getMovieById = async (movieId) => {
  const url = `movie/${movieId}`;
  return axios_instance.get(url, {
    params: {
      append_to_response: "credits",
    },
  });
};

export { discoverUpcomingMovies, getMovieById };
