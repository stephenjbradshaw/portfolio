import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {BaseButton, BaseUl} from "./BaseElements";

const Container = styled.div`
  position: absolute;
  top: ${({theme: {spacing}}) => spacing.headerHeight};
  z-index: 1;
  height: calc(100% - ${({theme: {spacing}}) => spacing.headerHeight});
  width: 100%;

  display: flex;
  flex-direction: column;
  grid-template-rows: 1fr auto auto;

  background-color: ${({theme: {colors}}) => colors.background};
`;

const Nav = styled.nav`
  flex-grow: 1;

  ul {
    list-style-type: none;
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vw;

    a {
      text-align: center;
      text-decoration: none;
    }
  }
`;

const SocialLinks = styled(BaseUl)`
  display: flex;
  justify-content: center;
  gap: 4vw;
`;

const LangSelector = styled(BaseUl)`
  display: flex;
  justify-content: center;
  gap: 1vw;
`;

interface LangButtonProps {
  isSelected: boolean;
}

const LangButton = styled(BaseButton)<LangButtonProps>`
  font-weight: ${({isSelected}) => (isSelected ? "bold" : "normal")};
`;

interface Props {
  isOpen: boolean;
}

const HeaderMenu = (props: Props) => {
  const {isOpen} = props;

  const {i18n, t} = useTranslation();

  if (isOpen)
    return (
      <Container>
        <Nav>
          <ul>
            <li>
              <Link to={`about`}>{t("ABOUT")}</Link>
            </li>
            <li>
              <Link to={`projects`}>{t("PROJECTS")}</Link>
            </li>
            <li>
              <Link to={`contact`}>{t("CONTACT")}</Link>
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
        <LangSelector>
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
