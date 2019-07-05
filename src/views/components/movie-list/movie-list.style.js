import styled from "styled-components";

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${props => props.theme.GRID_GUTTER};
  > div {
    margin: ${props => props.theme.GRID_GUTTER};
  }
`;
