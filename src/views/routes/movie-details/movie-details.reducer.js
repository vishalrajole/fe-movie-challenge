import {
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR
} from "./movie-details.actionTypes";

const initialState = {
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: action.payload.movieDetails
      };
    case FETCH_MOVIE_DETAILS_ERROR:
      return state;
    default:
      return state;
  }
}
