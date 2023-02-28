import {Link, Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {main} from "../themes/main";

const Root = () => {
  return (
    <ThemeProvider theme={main}>
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
