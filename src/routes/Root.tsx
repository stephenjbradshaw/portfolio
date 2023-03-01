import {Link, Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {main} from "../themes/main";
import {useTranslation} from "react-i18next";

const Root = () => {
  const {i18n} = useTranslation();

  return (
    <ThemeProvider theme={main}>
      <ul>
        <li>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </li>
        <li>
          <button onClick={() => i18n.changeLanguage("de")}>DE</button>
        </li>
      </ul>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`projects/1`}>Project 1</Link>
          </li>
          <li>
            <Link to={`projects/2`}>Project 2</Link>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Root;
