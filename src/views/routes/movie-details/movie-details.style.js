import styled from "styled-components";
import { IconClock } from "../../../style/icons";
import { Button } from "../../../style/button";

export const Badge = styled.span`
  display: inline-block;
  background: ${(props) => {
    if (props.success) {
      return "green";
    } else if (props.warning) {
      return "orange";
    } else {
      return "#30345A";
    }
  }};
  color: ${(props) => props.theme.BASE_TEXT};
  padding: 5px 10px;
  border-radius: ${(props) => props.theme.BORDER_RADIUS_LG};
`;

export const MoviePoster = styled.div`
  width: 130%;
  position: relative;
  left: -30px;
  right: -30px;
  img {
    width: 100%;
    object-fit: cover;
  }
  ${Button} {
    position: absolute;
    top: 0.1rem;
    left: 1rem;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  font-weight: lighter;
  margin: 10px 0 20px 0;
  small {
    display: flex;
    font-size: 1rem;
    color: ${(props) => props.theme.TEXT_LIGHT};
  }
`;

export const SmallInfo = styled.p`
  font-size: 0.8rem;
  margin: 10px 0 20px 0;
  color: ${(props) => props.theme.TEXT_LIGHT};
  > span + span {
    margin-left: 10px;
  }
`;

export const MovieDuration = styled.div`
  display: inline-flex;
  float: right;
  ${IconClock} {
    margin-right: 10px;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: lighter;
  margin: 10px 0 10px 0;
`;

export const Error = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;
