import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Loader from "../components/Loader";
import useGetEntries from "../data/useGetEntries";
import {IProjectFields} from "../schema/generated/contentful";

const Projects = () => {
  const {data, isError, isLoading} = useGetEntries<IProjectFields>({
    contentType: "project",
  });
  const {t} = useTranslation();

  if (isLoading) return <Loader />;
  if (isError) {
    throw new Error("GENERAL_ERROR");
  }
  if (!data || data.length === 0) {
    throw new Error("NOT_FOUND");
  }

  return (
    <div>
      <h1>{t("PROJECTS")}</h1>
      <ul>
        {!isLoading && data?.length
          ? data.map((entry) => {
              const {fields} = entry;
              return (
                <li key={fields.title}>
                  <Link to={fields.slug} state={{id: entry.sys.id}}>
                    <h2>{fields.title}</h2>
                    <img
                      alt={fields.cardImage.fields.title}
                      src={`${fields.cardImage.fields.file.url}?fm=webp&w=200&h=200`}
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
