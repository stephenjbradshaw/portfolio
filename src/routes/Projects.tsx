// @ts-nocheck

import {useTranslation} from "react-i18next";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useContentful from "../hooks/useContentful";
import {H1} from "../typography/H1";

const query = `{
  projectCollection {
    items {
      title
      mainImage {
        url
      }
      body {
        json
      }
    }
  }
}`;

const Projects = () => {
  const {data, isError, isLoading} = useContentful(query);
  const {t} = useTranslation();

  if (isError) return <Error />;
  if (isLoading) return <Loader />;

  return (
    <div>
      <H1>{t("PROJECTS")}</H1>
      <ul>
        {data.projectCollection.items.map((project) => {
          return (
            <li key={project.title}>
              <h2>{project.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
