import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {BaseLink} from "./BaseElements";
import LangSelect from "./LangSelect";
import SocialLinks from "./SocialLinks";

const Container = styled.div`
  position: absolute;
  top: ${({theme: {spacing}}) => spacing.headerHeight};
  z-index: 1;
  height: calc(100% - ${({theme: {spacing}}) => spacing.headerHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme: {colors}}) => colors.background};
`;

const Nav = styled.nav`
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 4vw;
  }
`;

const NavLink = styled(BaseLink)`
  font-size: 3.5rem;
`;

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMenu = (props: Props) => {
  const {isOpen, toggleMenu} = props;

  const {t} = useTranslation();

  if (isOpen)
    return (
      <Container>
        <Nav>
          <ul>
            <li>
              <NavLink to={`about`} onClick={toggleMenu}>
                {t("ABOUT")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`projects`} onClick={toggleMenu}>
                {t("PROJECTS")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`contact`} onClick={toggleMenu}>
                {t("CONTACT")}
              </NavLink>
            </li>
          </ul>
        </Nav>
        <SocialLinks />
        <LangSelect />
      </Container>
    );
  else return null;
};

export default HeaderMenu;
