import {useTranslation} from "react-i18next";
import styled, {css} from "styled-components";
import {BaseLink} from "./BaseElements";
import {ReactComponent as UnderlineSVG} from "../images/underline.svg";
import {useLocation} from "react-router-dom";

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
    line-height: 1.2;

    ${({isFooter}) => (isFooter ? FooterStyle : null)}
  }
`;

const StyledLink = styled(BaseLink)`
  position: relative;
  :hover {
    path {
      stroke-dashoffset: 0;
    }
  }
`;

interface UnderlineProps {
  $isCurrentPage: boolean;
  color: string;
}

const Underline = styled(UnderlineSVG)<UnderlineProps>`
  position: absolute;
  top: 4.5rem;
  left: 0;
  width: 100%;
  height: 13px;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: ${({$isCurrentPage}) => ($isCurrentPage ? 0 : 1)};
    transition: stroke-dashoffset 0.5s ease;
    stroke-width: 7px;
    stroke: ${({color, theme: {colors}}) => colors[color]};
  }
`;

interface NavLink {
  langKey: string;
  pathname: string;
  color: string;
}

const NavLinks: NavLink[] = [
  {langKey: "HOME", pathname: "/", color: "green"},
  {langKey: "ABOUT", pathname: "/about", color: "orange"},
  // {langKey: "PROJECTS", pathname: "/projects", color: "blue"},
  {langKey: "CONTACT", pathname: "/contact", color: "red"},
];

interface Props {
  toggleMenu?: () => void;
  isFooter?: boolean;
}

const Nav = ({toggleMenu, isFooter}: Props) => {
  const {t} = useTranslation();
  const {pathname} = useLocation();

  return (
    <NavElement className="nav" isFooter={isFooter}>
      <ul>
        {NavLinks.map((navLink: NavLink) => (
          <li key={navLink.pathname}>
            <StyledLink to={navLink.pathname} onClick={toggleMenu}>
              {t(navLink.langKey)}
              {!isFooter ? (
                <Underline
                  $isCurrentPage={pathname === navLink.pathname}
                  color={navLink.color}
                />
              ) : null}
            </StyledLink>
          </li>
        ))}
      </ul>
    </NavElement>
  );
};

export default Nav;
