import React from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {BaseButton, BaseLink, BaseUl} from "./BaseElements";

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

const SocialLinks = styled(BaseUl)`
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin-bottom: 4vw;
  font-size: 2rem;
`;

const LangSelector = styled(BaseUl)`
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-bottom: 4vw;
  font-size: 2rem;
`;

interface LangButtonProps {
  isSelected: boolean;
}

const LangButton = styled(BaseButton)<LangButtonProps>`
  font-weight: ${({isSelected}) => (isSelected ? "bold" : "normal")};
`;

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMenu = (props: Props) => {
  const {isOpen, toggleMenu} = props;

  const {i18n, t} = useTranslation();

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
        {/* Social links */}
        <SocialLinks>
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </SocialLinks>
        {/* Language selector */}
        <LangSelector aria-label={t<string>("LANGUAGE")}>
          <li>
            <LangButton
              onClick={() => i18n.changeLanguage("en-GB")}
              isSelected={i18n.resolvedLanguage === "en-GB"}
            >
              EN
            </LangButton>
          </li>
          <div aria-hidden={true}>|</div>
          <li>
            <LangButton
              onClick={() => i18n.changeLanguage("de-DE")}
              isSelected={i18n.resolvedLanguage === "de-DE"}
            >
              DE
            </LangButton>
          </li>
        </LangSelector>
      </Container>
    );
  else return null;
};

export default HeaderMenu;
