import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Header = () => {
  const {i18n} = useTranslation();

  return (
    <header>
      <nav>
        {/* Nav is dropdown on mobile, header on desktop */}
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`projects`}>Projects</Link>
          </li>
          <li>
            <Link to={`contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Language selector */}
      <ul>
        <li>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </li>
        <li>
          <button onClick={() => i18n.changeLanguage("de")}>DE</button>
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
