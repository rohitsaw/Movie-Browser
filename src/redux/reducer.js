const initialState = {
  upcomingMoviesList: [],
  upcomingMoviesPageNumber: 1,
  upcomingMoviesTotalPage: 1,

  searchQuery: "",
  searchMoviesList: [],
  searchMoviesPageNumber: 1,
  searchMoviesTotalPage: 1,

  selectedMovie: null,

  isLoading: true,

  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_MORE_UPCOMING_MOVIE": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "MORE_UPCOMING_MOVIE_LOADED": {
      console.log("upcoming movies loaded");
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
        error: "",
      };
    }
    case "SEARCH_MOVIE_LOADED": {
      console.log("search movies loaded");
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
        error: "",
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
        error: "",
      };
    }

    default:
      return state;
  }
};
