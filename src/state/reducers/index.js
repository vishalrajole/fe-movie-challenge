import { combineReducers } from "redux";

import moviesReducer from "../../views/routes/movies/movies.reducer";
import loaderReducer from "../../views/components/loader/loader.reducer";
import movieDetailsReducer from "../../views/routes/movie-details/movie-details.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  loader: loaderReducer,
  movieDetails: movieDetailsReducer
});

export default rootReducer;
