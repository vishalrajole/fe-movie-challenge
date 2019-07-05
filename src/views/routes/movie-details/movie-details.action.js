import ApiInstance from "../../../utilities/api";

/** API_KEY TODO Should be injected from env variables, currently hard coded here */
const API_KEY = "6dbcf6b4d31b238d4f21cd54be3ce1c1";

/** Fetch movie details
 * movieId: Number
 */
export const fetchMovieDetails = movieId => {
  return dispatch => {
    return ApiInstance.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    ).then(
      response => {
        return response.data;
      },
      error => {
        new Promise.reject(error);
      }
    );
  };
};
