import {Link} from "react-router-dom";

const Projects = () => {
  return (
    <div>
      {`Projects page`}
      <nav>
        <ul>
          <li>
            <Link to={`1`}>Project 1</Link>
          </li>
          <li>
            <Link to={`2`}>Project 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Projects;
