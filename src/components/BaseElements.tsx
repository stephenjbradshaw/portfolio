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
`;
