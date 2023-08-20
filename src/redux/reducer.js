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

  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_MORE_UPCOMING_MOVIE": {
      return {
        ...state,
        isLoading: true,
        upcomingMovieError: "",
      };
    }
    case "MORE_UPCOMING_MOVIE_LOADED": {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }

    case "LOADING_SEARCH_MOVIE": {
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        searchMovieError: "",
      };
    }
    case "SEARCH_MOVIE_LOADED": {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case "LOADING_SINGLE_MOVIE": {
      return {
        ...state,
        isLoading: true,
        selectedMovieError: "",
      };
    }
    case "SINGLE_MOVIE_LOADED": {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }

    case "ERROR": {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }

    case "REDIRECT_TO_HOME": {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        selectedMovieError: "",
        searchMovieError: "",
      };
    }

    default:
      return state;
  }
};
