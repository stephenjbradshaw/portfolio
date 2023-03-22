import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, Node} from "@contentful/rich-text-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import ErrorText from "../components/ErrorText";
import Loader from "../components/Loader";
import {DataContext} from "../data/DataContext";

const Article = styled.article`
  margin: 4rem ${({theme: {spacing}}) => spacing.sideMargin};
  height: 100%;
`;

interface TitleImageProps {
  objectPosition: string;
}

const TitleImage = styled.img<TitleImageProps>`
  width: 100%;
  max-height: 50rem;
  object-fit: cover;
  object-position: ${({objectPosition}) => objectPosition};
`;

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
  const {t} = useTranslation();
  const {slug} = useParams();

  const {
    featuredProjects: {data, isError, isLoading},
  } = useContext(DataContext);

  const project = data.find(
    (featuredProject) => featuredProject.fields.slug === slug
  );

  if (isLoading) return <Loader />;

  if (!project) {
    throw new Error("NOT_FOUND");
  }

  const {fields} = project;

  return (
    <>
      <Article>
        {isLoading ? <Loader /> : isError ? (
          <ErrorText>{t("GENERAL_ERROR")}</ErrorText>
        ) : (
          <>
            <h1>{fields.title}</h1>
            <TitleImage
              alt={fields.mainImage.fields.title}
              src={`${fields.mainImage.fields.file.url}?fm=webp&w=1300&h=1000`}
              objectPosition={fields.mainImageObjectPosition}
            />
            {documentToReactComponents(fields.body, renderOptions)}
          </>
        )}
      </Article>
      <hr />
    </>
  );
};

export default ProjectDetail;
