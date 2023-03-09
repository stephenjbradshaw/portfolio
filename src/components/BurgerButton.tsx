import {useTranslation} from "react-i18next";
import {BaseButton} from "./BaseElements";

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const BurgerButton = ({toggleMenu, isMenuOpen}: Props) => {
  const {t} = useTranslation();

  return (
    <BaseButton
      onClick={toggleMenu}
      aria-label={`${isMenuOpen ? t("CLOSE_NAV_MENU") : t("OPEN_NAV_MENU")}`}
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
    </BaseButton>
  );
};

export default BurgerButton;
