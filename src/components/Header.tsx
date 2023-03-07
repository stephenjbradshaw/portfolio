import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {BaseButton} from "./BaseElements";
import HeaderMenu from "./HeaderMenu";

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme: {spacing}}) => spacing.headerHeight};
  margin: 0 4vw;
`;

const MenuButton = styled(BaseButton)``;

const Header = () => {
  const {t} = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <HeaderContent>
          <Link to={`/`}>{"Stephen Bradshaw"}</Link>
          <MenuButton
            onClick={() => setIsMenuOpen((prev) => !prev)}
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
        <HeaderMenu isOpen={isMenuOpen} />
      </header>
    </>
  );
};

export default Header;
