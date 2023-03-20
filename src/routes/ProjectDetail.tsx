import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, Node} from "@contentful/rich-text-types";
import {useContext} from "react";
import {useParams} from "react-router-dom";
import Loader from "../components/Loader";
import {DataContext} from "../DataContext";

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

  const {featuredProjects, isError, isLoading} = useContext(DataContext);

  const project = featuredProjects.find(
    (featuredProject) => featuredProject.fields.slug === slug
  );

  if (isLoading) return <Loader />;

  if (isError) {
    throw new Error("GENERAL_ERROR");
  }
  if (!project) {
    throw new Error("NOT_FOUND");
  }

  const {fields} = project;

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
