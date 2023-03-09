import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
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
  const {pathname} = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const isHome = pathname === "/";

  // Block scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

  return (
    <header>
      <HeaderContent isLightText={isHome && !isMenuOpen}>
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
