import styled from "styled-components";
import {GITHUB, INSTAGRAM, LINKEDIN} from "../constants/URL";
import {BaseLink, BaseUl} from "./BaseElements";

interface UlProps {
  fontSize: string;
}

const Ul = styled(BaseUl)<UlProps>`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  font-size: ${({fontSize}) => fontSize};
`;

interface Props {
  fontSize: string;
}

const SocialLinks = ({fontSize}: Props) => {
  return (
    <Ul fontSize={fontSize} className="social-links">
      <li>
        <BaseLink to={GITHUB} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </BaseLink>
      </li>
      <li>
        <BaseLink to={LINKEDIN} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </BaseLink>
      </li>
      <li>
        <BaseLink to={INSTAGRAM} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </BaseLink>
      </li>
    </Ul>
  );
};

export default SocialLinks;
