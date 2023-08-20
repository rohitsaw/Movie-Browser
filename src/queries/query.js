import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
  },
});

const discoverUpcomingMovies = async (pageNumber) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tomorrow = date.toISOString().split("T").at(0);
  const url = `discover/movie`;
  return axios_instance.get(url, {
    params: {
      page: pageNumber,
      sort_by: "primary_release_date.asc",
      "primary_release_date.gte": tomorrow,
      include_adult: false,
      "with_runtime.gte": 61,
      language: "en|hi",
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

const searchMovies = async (query, pageNumber) => {
  const url = `search/movie`;
  return axios_instance.get(url, {
    params: {
      page: pageNumber,
      query: query,
      include_adult: false,
    },
  });
};

export { discoverUpcomingMovies, getMovieById, searchMovies };
