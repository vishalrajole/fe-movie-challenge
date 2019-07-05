import React from "react";
import PropTypes from "prop-types";

import { SearchBarWrapper } from "./search-bar.style";
import { IconSearch } from "../../../style/icons";

/**
 * Search bar component
 * Icon: Search icon
 */
const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <IconSearch />
      <input {...props} />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
