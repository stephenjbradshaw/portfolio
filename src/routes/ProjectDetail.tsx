import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, Node} from "@contentful/rich-text-types";
import {useParams} from "react-router-dom";
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
          src={`${fields.file.url}?fm=webp&w=300&h=300`}
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
  if (isError) {
    throw new Error("There was an error displaying the article");
  }
  if (!data || data.length === 0) {
    throw new Error("Page not found");
  }

  const {fields} = data[0];

  return (
    <>
      <h1>{fields.title}</h1>
      <img
        alt={fields.mainImage.fields.title}
        src={`${fields.mainImage.fields.file.url}?fm=webp&w=300&h=300`}
      />
      {documentToReactComponents(fields.body, renderOptions)}
    </>
  );
};

export default ProjectDetail;
