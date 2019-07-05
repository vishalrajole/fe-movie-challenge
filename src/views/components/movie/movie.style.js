import styled from "styled-components";

export const MovieTile = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex: 0 0 30%;
  }
  @media (min-width: 992px) {
    flex: 0 0 15%;
  }
`;

export const MoviePoster = styled.div`
  width: 13rem;
  height: 20rem;
  display: flex;
  background-color: ${props => props.theme.BASE_IMG_BG};
  border-radius: ${props => props.theme.BORDER_RADIUS_LG};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${props => props.theme.BACKGROUND_IMAGE_COLOR};
    width: 4rem;
    height: 4rem;
  }
  & img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.BORDER_RADIUS_LG};
  }
`;

export const MovieInfo = styled.div`
  text-align: center;
  h4 {
    margin-top: 10px;
  }
  small {
    font-size: 0.8rem;
    color: ${props => props.theme.TEXT_LIGHT};
  }
`;
