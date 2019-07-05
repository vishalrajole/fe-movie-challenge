import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

import { fetchMovies } from "./movies.action";
import Loader from "../../components/loader/loader.index";
import MovieList from "../../components/movie-list/movie-list.index";
import SearchBar from "../../components/search-bar/search-bar.index";
import { Button } from "../../../style/button";

/**
 * Home page for movie list, renders trending movies, allow user to paginate and search movie by movie name
 * On success, passes movieList through redux into component
 */
class Movies extends Component {
  initialState = {
    searchQuery: "",
    page: 1,
    isDataFound: false
  };
  state = this.initialState;

  componentDidMount() {
    this.fetchMovies({
      searchQuery: this.state.searchQuery,
      page: this.state.page
    });
  }

  /**
   * Search movies based on user input
   * debounce: delays search function call by 500 milliseconds
   */
  fetchMovies = debounce(({ searchQuery, page, isLoadMore }) => {
    this.props.fetchMovies({ searchQuery, page, isLoadMore }).then(success => {
      if (this.props.movieList.length === 0) {
        this.setState({ isDataFound: true });
      } else {
        this.setState({ isDataFound: false });
      }
    });
  }, 500);

  onSearchChange = event => {
    this.setState(
      {
        searchQuery: event.target.value
      },
      () => {
        this.fetchMovies({
          searchQuery: this.state.searchQuery,
          page: this.state.page
        });
      }
    );
  };

  /**
   * Paginate function passes page number increased by 1
   */
  onPaginate = () => {
    this.setState(
      prevState => {
        return { page: prevState.page + 1 };
      },
      () => {
        this.fetchMovies({
          searchQuery: this.state.searchQuery,
          page: this.state.page,
          isLoadMore: true
        });
      }
    );
  };

  /**
   * Marks Load more button visibility true or false
   * returns true: current page < total pages
   * returns false: current page >= total pages
   */
  isLoadMoreVisible = () => {
    return this.state.page !== this.props.totalPages;
  };

  render() {
    return (
      <>
        {/* Search Bar Component */}
        <SearchBar
          value={this.state.searchQuery}
          onChange={this.onSearchChange}
          placeholder="Find movies ..."
        />

        {!this.state.searchQuery ? (
          <h2>Weekly Trending List</h2>
        ) : (
          <h2>Showing Search results for : {this.state.searchQuery}</h2>
        )}

        {this.props.movieList.length > 0 && (
          <>
            {/* Movie Component */}
            <MovieList movieList={this.props.movieList} />

            {this.isLoadMoreVisible() && (
              <Button block onClick={this.onPaginate}>
                {this.props.isLoading ? <Loader /> : "Load More ..."}
              </Button>
            )}
          </>
        )}

        {/* Empty result */}
        {this.state.isDataFound && <div>No data found</div>}
      </>
    );
  }
}

/**
 * Proptypes
 */
Movies.propTypes = {
  movieList: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchMovies: PropTypes.func,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    movieList: state.movies.movieList,
    totalPages: state.movies.totalPages,
    isLoading: state.loader.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovies
  }
)(Movies);
