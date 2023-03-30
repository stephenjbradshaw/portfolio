import styled, {css} from "styled-components";
import {BaseButton, BaseLink} from "./BaseElements";

export const actionButtonStyle = css`
  padding: 1rem 3.5rem;
  background-color: ${({theme: {colors}}) => colors.background};
  color: ${({theme: {colors}}) => colors.darkGrey};
  transition: opacity ease-in-out 0.2s;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
  }
`;

export const ActionButton = styled(BaseButton)`
  ${actionButtonStyle}
`;

export const ActionButtonLink = styled(BaseLink)`
  ${actionButtonStyle}
  display: inline-block;
  &:visited {
    color: ${({theme: {colors}}) => colors.darkGrey};
  }
`;
