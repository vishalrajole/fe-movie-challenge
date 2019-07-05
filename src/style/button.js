import styled from "styled-components";

export const Button = styled.button`
  width: ${props => (props.block ? "100%" : "auto")};
  height: 34px;
  background: ${props => props.theme.BUTTON_BG};
  border-color: ${props => props.theme.BUTTON_BORDER};
  border-radius: ${props => props.theme.BORDER_RADIUS_LG};
  color: ${props => props.theme.BUTTON_TEXT}
  padding: 5px 15px;
  margin: 15px 0 30px 0;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  &:hover, &:active, &:focus {
    color: ${props => props.theme.BUTTON_HOVER_TEXT};
  }
`;
