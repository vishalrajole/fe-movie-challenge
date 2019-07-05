import styled from "styled-components";
import { IconSearch } from "../../../style/icons";

export const SearchBarWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.SEARCH_BAR_BG};
  border-radius: ${props => props.theme.BORDER_RADIUS_LG};
  margin: 15px 0 30px 0;
  color: ${props => props.theme.SEARCH_TEXT};
  overflow: hidden;
  align-items: center;
  input {
    width: 100%;
    height: 34px;
    background: none;
    border: none;
    padding: 5px 15px 5px 0;
    outline: 0;
    font-size: 1.2rem;
    color: inherit;
  }
  ${IconSearch} {
    padding: 0 15px;
  }
`;
