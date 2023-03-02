import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useGetEntries from "../hooks/useGetEntries";
import {IProjectFields} from "../schema/generated/contentful";
import {H1} from "../typography/H1";

const Projects = () => {
  const {data, isError, isLoading} = useGetEntries<IProjectFields>("project");
  const {t} = useTranslation();

  return (
    <div>
      <H1>{t("PROJECTS")}</H1>
      {isLoading ? <Loader /> : isError ? <Error /> : null}
      <ul>
        {!isLoading && data?.length
          ? data.map((entry) => {
              const {fields} = entry;
              return (
                <li key={fields.title}>
                  <Link to={fields.slug} state={{id: entry.sys.id}}>
                    <h2>{fields.title}</h2>
                    <img
                      style={{maxHeight: "10rem", maxWidth: "10rem"}}
                      alt={fields.mainImage.fields.title}
                      src={fields.mainImage.fields.file.url}
                    />
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Projects;
