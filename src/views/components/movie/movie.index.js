import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { MovieTile, MoviePoster, MovieInfo } from "./movie.style";
import { IconImage } from "../../../style/icons";

const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/`;

/**
 * Movie component, renders individual movie details
 */
const Movie = props => {
  const movie = props.movie;

  const posterUrl = props.movie.poster_path
    ? `${BASE_POSTER_URL}${props.movie.poster_path}`
    : null;

  /**
   * Navigate to movie details view
   * passes movieId in url params
   */
  const navigateToMovieDetails = () => {
    props.history.push(`movie-details/${props.movie.id}`);
  };

  return (
    <MovieTile onClick={navigateToMovieDetails}>
      <MoviePoster>
        {posterUrl ? <img src={posterUrl} alt={posterUrl} /> : <IconImage />}
      </MoviePoster>
      <MovieInfo>
        <h4>{movie.title}</h4>
        <small>Rating: {movie.vote_average}</small>
      </MovieInfo>
    </MovieTile>
  );
};

/**
 * Proptypes
 */
Movie.propTypes = {
  id: PropTypes.string,
  movie: PropTypes.object
};

export default withRouter(Movie);
