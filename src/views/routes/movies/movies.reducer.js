import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "./movies.actionTypes";

const initialState = {
  movieList: [],
  movieDetails: {},
  totalResults: 0,
  total_pages: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      /** If result is paginated, append result to existing list else create new list  */
      if (action.payload.isLoadMore) {
        return {
          ...state,
          movieList: [...state.movieList, ...action.payload.moviesData.results],
          totalResults: action.payload.moviesData.total_results,
          totalPages: action.payload.moviesData.total_pages
        };
      } else {
        return {
          ...state,
          movieList: action.payload.moviesData.results,
          totalResults: action.payload.moviesData.total_results,
          totalPages: action.payload.moviesData.total_pages
        };
      }
    case FETCH_MOVIES_ERROR:
      return state;
    default:
      return state;
  }
}
