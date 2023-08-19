import {
  discoverUpcomingMovies,
  getMovieById,
  searchMovies,
} from "../queries/query.js";

const getMoreMovie = () => async (dispatch, getState) => {
  const state = getState();
  if (state.searchQuery.length > 0) {
    dispatch({
      type: "LOADING_SEARCH_MOVIE",
    });

    const res = await searchMovies(
      state.searchQuery,
      state.searchMoviesPageNumber
    );

    if (
      state.searchMoviesPageNumber <= state.searchMoviesTotalPage &&
      res.data.results.length > 0
    ) {
      dispatch({
        type: "SEARCH_MOVIE_LOADED",
        payload: {
          searchMoviesList: [...state.searchMoviesList, ...res.data.results],
          searchMoviesPageNumber: state.searchMoviesPageNumber + 1,
          searchMoviesTotalPage: res.data.total_pages,
        },
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: {
          error:
            state.searchMoviesList.length > 0
              ? "No More Movies To List."
              : "No Movie Found! Try to Search Something else.",
        },
      });
    }
  } else {
    dispatch({ type: "LOADING_MORE_UPCOMING_MOVIE" });

    const state = getState();

    const res = await discoverUpcomingMovies(state.upcomingMoviesPageNumber);

    if (state.upcomingMoviesPageNumber <= state.upcomingMoviesTotalPage) {
      dispatch({
        type: "MORE_UPCOMING_MOVIE_LOADED",
        payload: {
          upcomingMoviesList: [
            ...state.upcomingMoviesList,
            ...res.data.results,
          ],
          upcomingMoviesPageNumber: state.upcomingMoviesPageNumber + 1,
          upcomingMoviesTotalPage: res.data.total_pages,
        },
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: {
          error: "No More Movies To List.",
        },
      });
    }
  }
};

const getSearchMovies = (queryString) => async (dispatch) => {
  dispatch({
    type: "LOADING_SEARCH_MOVIE",
    payload: {
      searchQuery: queryString,
      searchMoviesList: [],
      searchMoviesPageNumber: 1,
    },
  });

  const res = await searchMovies(queryString, 1);

  if (res.data.results.length === 0) {
    dispatch({
      type: "ERROR",
      payload: {
        error: "No Movie Found! Try to Search Something else.",
      },
    });
  } else {
    dispatch({
      type: "SEARCH_MOVIE_LOADED",
      payload: {
        searchMoviesList: res.data.results,
        searchMoviesPageNumber: 2,
        searchMoviesTotalPage: res.data.total_pages,
      },
    });
  }
};

const getSingleMovieDetails = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_SINGLE_MOVIE" });
    const res = await getMovieById(movieId);

    dispatch({
      type: "SINGLE_MOVIE_LOADED",
      payload: {
        selectedMovie: res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: {
        error: "No Movie Found! Try to Search Something else.",
      },
    });
  }
};

const redirectToHome = () => async (dispatch) => {
  dispatch({
    type: "REDIRECT_TO_HOME",
    payload: {
      searchQuery: "",
      searchMoviesList: [],
      searchMoviesPageNumber: 1,
    },
  });
};

export { getMoreMovie, getSingleMovieDetails, getSearchMovies, redirectToHome };
