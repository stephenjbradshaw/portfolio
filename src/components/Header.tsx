import {useState} from "react";
import styled from "styled-components";
import {BaseLink} from "./BaseElements";
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme: {spacing}}) => spacing.headerHeight};
  font-size: 2.7rem;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <HeaderContent>
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
