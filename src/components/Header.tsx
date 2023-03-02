import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Header = () => {
  const {i18n, t} = useTranslation();

  return (
    <header>
      <nav>
        {/* Nav is dropdown on mobile, header on desktop */}
        <ul>
          <li>
            <Link to={`/`}>{t("HOME")}</Link>
          </li>
          <li>
            <Link to={`projects`}>{t("PROJECTS")}</Link>
          </li>
          <li>
            <Link to={`contact`}>{t("CONTACT")}</Link>
          </li>
        </ul>
      </nav>
      {/* Language selector */}
      <ul>
        <li>
          <button onClick={() => i18n.changeLanguage("en-GB")}>EN</button>
        </li>
        <li>
          <button onClick={() => i18n.changeLanguage("de-DE")}>DE</button>
        </li>
      </ul>
      {/* Social links */}
      <ul>
        <li>Social link 1</li>
        <li>Social link 2</li>
      </ul>
    </header>
  );
};

export default Header;
