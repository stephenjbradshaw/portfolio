import {useState} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {BaseButton, BaseLink} from "./BaseElements";
import HeaderMenu from "./HeaderMenu";

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme: {spacing}}) => spacing.headerHeight};
  margin: 0 4vw;
`;

const NameLink = styled(BaseLink)`
  font-size: 2.7rem;
`;

const MenuButton = styled(BaseButton)`
  font-size: 2.7rem;
`;

const Header = () => {
  const {t} = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <header>
        <HeaderContent>
          <NameLink to={`/`}>{"Stephen Bradshaw"}</NameLink>
          <MenuButton
            onClick={toggleMenu}
            aria-label={`${
              isMenuOpen ? t("CLOSE_NAV_MENU") : t("OPEN_NAV_MENU")
            }`}
          >
            {isMenuOpen ? (
              <>
                <p className="visually-hidden">{t("CLOSE_NAV_MENU")}</p>
                <i className="fa-solid fa-xmark"></i>
              </>
            ) : (
              <>
                <p className="visually-hidden">{t("OPEN_NAV_MENU")}</p>
                <i className="fa-solid fa-bars"></i>
              </>
            )}
          </MenuButton>
        </HeaderContent>
        <HeaderMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
};

export default Header;
