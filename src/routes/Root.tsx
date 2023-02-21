import {Link, Outlet} from "react-router-dom";

const Root = () => {
  return (
    <>
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
    </>
  );
};

export default Root;
