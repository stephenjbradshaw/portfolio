import styled from "styled-components";
import LangSelect from "./LangSelect";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

const Container = styled.div`
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
`;

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMenu = ({isOpen, toggleMenu}: Props) => {
  if (isOpen)
    return (
      <Container>
        <Nav toggleMenu={toggleMenu} />
        <SocialLinks fontSize="2.5rem" />
        <LangSelect fontSize="2rem" />
      </Container>
    );
  else return null;
};

export default HeaderMenu;
