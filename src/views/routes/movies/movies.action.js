import ApiInstance from "../../../utilities/api";
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "./movies.actionTypes";

/** API_KEY TODO Should be injected from env variables, currently hard coded here */
const API_KEY = "6dbcf6b4d31b238d4f21cd54be3ce1c1";

/** Fetch movie list by search string if searchQuery is given else fetch trending lists
 * searchQuery: String
 * Page: Number
 * isLoadMore: Boolean
 */
export const fetchMovies = ({ searchQuery, page, isLoadMore }) => {
  const url = searchQuery
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
    : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`;

  return dispatch => {
    return ApiInstance.get(url).then(
      response => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: {
            moviesData: response.data,
            isLoadMore
          }
        });
      },
      error => {
        dispatch({
          type: FETCH_MOVIES_ERROR,
          payload: error
        });
      }
    );
  };
};
