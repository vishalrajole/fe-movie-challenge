import React from "react";
import PropTypes from "prop-types";

import Movie from "../movie/movie.index";
import { MovieListWrapper } from "./movie-list.style";

/**
 * Movie List component, render list in tile format
 */
const MovieList = props => {
  const { movieList } = props;

  const renderMovies = () => {
    return movieList.map(movie => {
      /** Movie component */
      return <Movie key={movie.id} movie={movie} />;
    });
  };

  return <MovieListWrapper>{renderMovies()}</MovieListWrapper>;
};

/**
 * Proptypes
 */
MovieList.propTypes = {
  movieList: PropTypes.array
};

export default MovieList;
