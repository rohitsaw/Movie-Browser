import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 2000,
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
  },
});

const discoverUpcomingMovies = async (pageNumber, options) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tomorrow = date.toISOString().split("T").at(0);
  const url = `discover/movie`;

  const modified_options = {
    language:
      options?.languages
        ?.map((each) => each.split("-").at(-1).trim())
        .join("|") || undefined,
    region:
      options?.countries
        ?.map((each) => each.split("-").at(-1).trim())
        .join("|") || undefined,
  };

  return axios_instance.get(url, {
    params: {
      page: pageNumber,
      "primary_release_date.gte": tomorrow,
      ...modified_options,
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
    },
  });
};

const getAllAvailableLanguages = async () => {
  const url = "configuration/languages";
  return axios_instance.get(url);
};

const getAllAvailableCountries = async () => {
  const url = "configuration/countries";
  return axios_instance.get(url);
};

export {
  discoverUpcomingMovies,
  getMovieById,
  searchMovies,
  getAllAvailableLanguages,
  getAllAvailableCountries,
};
