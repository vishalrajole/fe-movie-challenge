import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchMovieDetails } from "./movie-details.action";
import {
  MoviePoster,
  Badge,
  MovieTitle,
  SmallInfo,
  MovieDuration,
  SectionTitle
} from "./movie-details.style";
import { IconClock, IconArrowLeft } from "../../../style/icons";
import { Button } from "../../../style/button";

/**
 * Shows movie details, fetch movie details
 */
const MovieDetails = props => {
  const {
    match: { params },
    fetchMovieDetails
  } = props;

  const [movieDetails, setMovieDetails] = useState(null);

  /** default path should be moved to constants */
  const backdropImg = movieDetails
    ? `https://image.tmdb.org/t/p/w1400_and_h450_face/${
        movieDetails.backdrop_path
      }`
    : null;

  useEffect(() => {
    fetchMovieDetails(params.movieId).then(movieDetails => {
      setMovieDetails(movieDetails);
    });
  }, [fetchMovieDetails]);

  /** generate genre list separated by comma */
  const getMovieGenre = () => {
    if (movieDetails) {
      return movieDetails.genres.map(genre => genre.name).toString();
    }
    return null;
  };

  /** generate production companies list separated by comma */
  const getProductionCompanies = () => {
    if (movieDetails) {
      return movieDetails.production_companies
        .map(company => company.name)
        .toString();
    }
    return null;
  };

  /** back navigation to home page */
  const redirectToHomePage = () => {
    props.history.push("/movies");
  };

  return (
    movieDetails && (
      <>
        <MoviePoster>
          <img src={backdropImg} alt={backdropImg} />
          <Button onClick={redirectToHomePage}>
            <IconArrowLeft />
          </Button>
        </MoviePoster>
        <MovieTitle>
          {movieDetails.title}
          <small>{movieDetails.tagline}</small>
        </MovieTitle>

        <SmallInfo>
          {getMovieGenre()} | {movieDetails.release_date}
        </SmallInfo>
        <SmallInfo>
          <Badge success={movieDetails.status.includes("Released")}>
            {movieDetails.status}
          </Badge>
          <Badge>
            {`${movieDetails.vote_average} rating by ${movieDetails.vote_count}
            voters`}
          </Badge>
          <MovieDuration>
            <IconClock />
            {movieDetails.runtime} minutes
          </MovieDuration>
        </SmallInfo>

        <SectionTitle>Synopsis</SectionTitle>
        <SmallInfo>{movieDetails.overview}</SmallInfo>
        <SectionTitle>Production</SectionTitle>
        <SmallInfo> {getProductionCompanies()}</SmallInfo>
      </>
    )
  );
};

/**
 * Proptypes
 */
MovieDetails.propTypes = {
  fetchMovieDetails: PropTypes.func
};

const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails.movie
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovieDetails
  }
)(MovieDetails);
