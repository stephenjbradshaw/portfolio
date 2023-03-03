import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, Node} from "@contentful/rich-text-types";
import {useParams} from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useGetEntries from "../hooks/useGetEntries";
import {IProjectFields} from "../schema/generated/contentful";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const {
        data: {
          target: {fields},
        },
      } = node;
      return (
        <img
          alt={fields.title}
          src={`https:${fields.file.url}`}
          height={fields.file.details.image.height}
          width={fields.file.details.image.width}
        />
      );
    },
  },
};

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
      <h1>{fields.title}</h1>
      <img
        style={{maxHeight: "10rem", maxWidth: "10rem"}}
        alt={fields.mainImage.fields.title}
        src={fields.mainImage.fields.file.url}
      />
      {documentToReactComponents(fields.body, renderOptions)}
    </>
  );
};

export default ProjectDetail;
