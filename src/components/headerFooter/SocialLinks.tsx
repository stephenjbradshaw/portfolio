import styled from "styled-components";
import {BaseLink, BaseUl} from "../BaseElements";

interface UlProps {
  fontSize: string;
}

const Ul = styled(BaseUl)<UlProps>`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  font-size: ${({fontSize}) => fontSize};
`;

interface SocialLink {
  name: string;
  url: string;
  iconClass: string;
}

const socialLinksData: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/stephenjbradshaw",
    iconClass: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/stephenbradshawdev/",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/stephenbradshaw10/",
    iconClass: "fa-brands fa-instagram",
  },
];

interface Props {
  fontSize: string;
}

const SocialLinks = ({fontSize}: Props) => {
  return (
    <Ul fontSize={fontSize} className="social-links">
      {socialLinksData.map((socialLink: SocialLink) => (
        <li key={socialLink.name}>
          <BaseLink to={socialLink.url} target="_blank" rel="noreferrer">
            <i className={socialLink.iconClass} aria-hidden />
            <p className="visually-hidden">{socialLink.name}</p>
          </BaseLink>
        </li>
      ))}
    </Ul>
  );
};

export default SocialLinks;
