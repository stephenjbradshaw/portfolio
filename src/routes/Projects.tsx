import {useTranslation} from "react-i18next";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useContentfulEntries from "../hooks/useContentfulEntries";
import {IProjectFields} from "../schema/generated/contentful";
import {H1} from "../typography/H1";

const Projects = () => {
  const {data, isError, isLoading} = useContentfulEntries<IProjectFields>();
  const {t} = useTranslation();

  return (
    <div>
      <H1>{t("PROJECTS")}</H1>
      {isLoading ? <Loader /> : isError ? <Error /> : null}
      <ul>
        {!isLoading && data?.length
          ? data.map(({fields}) => {
              return (
                <li key={fields.title}>
                  <h2>{fields.title}</h2>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Projects;
