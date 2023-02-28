// TODO
// @ts-nocheck

import {Link, Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {main} from "../themes/main";
import {useTranslation} from "react-i18next";

const languages = {
  en: {nativeName: "English"},
  de: {nativeName: "Deutsch"},
};

const Root = () => {
  const {i18n} = useTranslation();

  return (
    <ThemeProvider theme={main}>
      <ul>
        {Object.keys(languages).map((lang) => (
          <li key={lang}>
            <button
              style={{
                fontWeight: i18n.resolvedLanguage === lang ? "bold" : "normal",
              }}
              onClick={() => i18n.changeLanguage(lang)}
            >
              {languages[lang].nativeName}
            </button>
          </li>
        ))}
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
