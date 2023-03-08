import styled from "styled-components";
import {GITHUB, INSTAGRAM, LINKEDIN} from "../constants/URL";
import {BaseLink, BaseUl} from "./BaseElements";

const Ul = styled(BaseUl)`
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin-bottom: 3vw;
  font-size: 2.5rem;
`;

const SocialLinks = () => {
  return (
    <Ul>
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
