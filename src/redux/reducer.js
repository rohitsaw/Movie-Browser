import { ACTIONS } from "./constant";

const initialState = {
  upcomingMoviesList: [],
  upcomingMoviesPageNumber: 1,
  upcomingMoviesTotalPage: 1,
  upcomingMovieError: "",

  searchQuery: "",
  searchMoviesList: [],
  searchMoviesPageNumber: 1,
  searchMoviesTotalPage: 1,
  searchMovieError: "",

  selectedMovie: null,
  selectedMovieError: "",

  allCountries: [],
  allLanguages: [],

  savedCountries: [],
  savedLanguages: [],
  sortBy: "popularity.desc",

  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOADING_MORE_UPCOMING_MOVIE: {
      return {
        ...state,
        isLoading: true,
        upcomingMovieError: "",
      };
    }
    case ACTIONS.MORE_UPCOMING_MOVIE_LOADED: {
      return {
        ...state,
        upcomingMoviesList: action.payload.upcomingMoviesList,
        upcomingMoviesPageNumber: action.payload.upcomingMoviesPageNumber,
        upcomingMoviesTotalPage: action.payload.upcomingMoviesTotalPage,
        isLoading: false,
      };
    }

    case ACTIONS.LOADING_SEARCH_MOVIE: {
      return {
        ...state,
        searchQuery: action?.payload?.searchQuery ?? state.searchQuery,
        searchMoviesList:
          action?.payload?.searchMoviesList ?? state.searchMoviesList,
        searchMoviesPageNumber:
          action?.payload?.searchMoviesPageNumber ??
          state.searchMoviesPageNumber,
        isLoading: true,
        searchMovieError: "",
      };
    }
    case ACTIONS.SEARCH_MOVIE_LOADED: {
      return {
        ...state,
        searchMoviesList: action.payload.searchMoviesList,
        searchMoviesPageNumber: action.payload.searchMoviesPageNumber,
        searchMoviesTotalPage: action.payload.searchMoviesTotalPage,
        isLoading: false,
      };
    }
    case ACTIONS.LOADING_SINGLE_MOVIE: {
      return {
        ...state,
        isLoading: true,
        selectedMovieError: "",
      };
    }
    case ACTIONS.SINGLE_MOVIE_LOADED: {
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie,
        isLoading: false,
      };
    }

    case ACTIONS.ERROR: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }

    case ACTIONS.REDIRECT_TO_HOME: {
      return {
        ...state,
        searchQuery: "",
        searchMoviesList: [],
        searchMoviesPageNumber: 1,

        isLoading: false,
        selectedMovieError: "",
        searchMovieError: "",
      };
    }

    case ACTIONS.LOAD_FILTERS: {
      return {
        ...state,
        allCountries: action.payload.countries,
        allLanguages: action.payload.languages,
      };
    }

    case ACTIONS.APPLY_FILTERS: {
      return {
        ...state,
        savedCountries: action.payload.countries,
        savedLanguages: action.payload.languages,
        sortBy: action.payload.sortBy,
      };
    }

    default:
      return state;
  }
};
