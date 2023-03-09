import styled from "styled-components";
import LangSelect from "./LangSelect";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

interface ContainerProps {
  isOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  visibility: ${({isOpen}) => (isOpen ? "visible" : "hidden")};
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  transition: visibility 600ms ease, opacity 400ms ease;
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4vw;
  padding-bottom: 4vw;
  background-color: ${({theme: {colors}}) => colors.background};

  .social-links,
  .lang-select {
    transform: ${({isOpen}) => (isOpen ? "translateY(0)" : "translateY(100%)")};
    transition: transform 400ms ease;
  }

  .nav {
    transform: ${({isOpen}) => (isOpen ? "translateY(0)" : "translateY(5rem)")};
    transition: transform 300ms ease;
  }
`;

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMenu = ({isOpen, toggleMenu}: Props) => {
  return (
    <Container isOpen={isOpen}>
      <Nav toggleMenu={toggleMenu} />
      <SocialLinks fontSize="2.5rem" />
      <LangSelect fontSize="2rem" />
    </Container>
  );
};

export default HeaderMenu;
