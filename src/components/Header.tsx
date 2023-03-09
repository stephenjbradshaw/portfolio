import {useState} from "react";
import styled from "styled-components";
import {BaseLink} from "./BaseElements";
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";

interface HeaderContentProps {
  isLightText: boolean;
}

const HeaderContent = styled.header<HeaderContentProps>`
  position: relative;
  z-index: 2;
  height: ${({theme: {spacing}}) => spacing.headerHeight};
  margin: 0 ${({theme: {spacing}}) => spacing.sideMargin};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.7rem;
  color: ${({isLightText, theme: {colors}}) =>
    isLightText ? colors.textLight : colors.text};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <HeaderContent isLightText={!isMenuOpen}>
        <BaseLink to={`/`} onClick={closeMenu}>
          {"Stephen Bradshaw"}
        </BaseLink>
        <BurgerButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </HeaderContent>
      <HeaderMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
