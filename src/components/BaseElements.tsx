import {Link} from "react-router-dom";
import styled from "styled-components";

export const BaseUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const BaseButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: unset;
  border: none;
  color: inherit;
  :hover {
    cursor: pointer;
  }
`;

export const BaseLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

export const BaseArticle = styled.article`
  padding: 0 ${({theme: {spacing}}) => spacing.sideMargin};
  margin: auto;
  height: 100%;
  max-width: 99rem;

  ul {
    list-style-type: disc;
    padding-left: 1rem;
    p {
      margin-bottom: 0.4rem;
    }
    li {
      padding-left: 0.5rem;
    }
  }
`;
