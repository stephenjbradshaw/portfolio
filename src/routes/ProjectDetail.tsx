import {useParams} from "react-router-dom";
import useGetEntries from "../hooks/useGetEntries";
import {IProjectFields} from "../schema/generated/contentful";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {H1} from "../typography/H1";
import Loader from "../components/Loader";
import Error from "../components/Error";

const ProjectDetail = () => {
  const {slug} = useParams();

  const {data, isError, isLoading} = useGetEntries<IProjectFields>(
    "project",
    slug
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  if (!data) return null;

  const {fields} = data[0];

  return (
    <>
      <H1>{fields.title}</H1>
      <img
        style={{maxHeight: "10rem", maxWidth: "10rem"}}
        alt={fields.mainImage.fields.title}
        src={fields.mainImage.fields.file.url}
      />
      {documentToReactComponents(fields.body)}
    </>
  );
};

export default ProjectDetail;
