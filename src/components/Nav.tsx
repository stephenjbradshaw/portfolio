import {useTranslation} from "react-i18next";
import styled, {css} from "styled-components";
import {BaseLink} from "./BaseElements";

const FooterStyle = css`
  gap: 0.5rem;
  font-size: 1.4rem;
  text-decoration: underline ${({theme: {colors}}) => colors.secondaryText};
  align-items: flex-start;

  a {
    color: ${({theme: {colors}}) => colors.secondaryText};
  }
`;

interface NavElementProps {
  isFooter?: boolean;
}

const NavElement = styled.nav<NavElementProps>`
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 4vw;
    font-size: 3.5rem;

    ${({isFooter}) => (isFooter ? FooterStyle : null)}
  }
`;

interface Props {
  toggleMenu?: () => void;
  isFooter?: boolean;
}

const Nav = ({toggleMenu, isFooter}: Props) => {
  const {t} = useTranslation();

  return (
    <NavElement className="nav" isFooter={isFooter}>
      <ul>
        <li>
          <BaseLink to={`about`} onClick={toggleMenu}>
            {t("ABOUT")}
          </BaseLink>
        </li>
        <li>
          <BaseLink to={`projects`} onClick={toggleMenu}>
            {t("PROJECTS")}
          </BaseLink>
        </li>
        <li>
          <BaseLink to={`contact`} onClick={toggleMenu}>
            {t("CONTACT")}
          </BaseLink>
        </li>
      </ul>
    </NavElement>
  );
};

export default Nav;
