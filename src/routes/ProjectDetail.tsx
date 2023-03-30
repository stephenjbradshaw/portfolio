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
  padding: 0 ${({theme: {spacing}}) => spacing.sideMargin} 4rem;
  margin: auto;
  height: 100%;
  max-width: 99rem;
  h2 {
    margin: 0;
  }
`;

interface TitleImageProps {
  objectPosition: string;
}

const TitleImage = styled.img<TitleImageProps>`
  margin: 4rem 0;
  width: 100%;
  max-height: 60rem;
  border-radius: 10px;
  object-fit: cover;
  object-position: ${({objectPosition}) => objectPosition};
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 760px;
  margin: 2rem 0;
  overflow: hidden;
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

  if (isLoading)
    return (
      <Article>
        <Loader />
      </Article>
    );

  if (!project) {
    throw new Error("NOT_FOUND");
  }

  const {fields} = project;

  const imageProps = fields?.mainImage
    ? {
        alt: fields.mainImage.fields.title,
        src: `${fields.mainImage.fields.file.url}?fm=webp&w=1300&h=1000`,
        objectPosition: fields.mainImageObjectPosition,
      }
    : {
        alt: fields.cardImage.fields.title,
        src: `${fields.cardImage.fields.file.url}?fm=webp&w=1300&h=1000`,
        objectPosition: fields.cardImageObjectPosition,
      };

  const iFrameData = {
    title: "Bouncing DVD Logo Simulator",
    src: "https://www.dvdlogosimulator.com?iframe=true",
  };

  return (
    <>
      <Article>
        {isError ? (
          <ErrorText>{t("GENERAL_ERROR")}</ErrorText>
        ) : (
          <>
            <h2>{fields.title}</h2>
            {fields.slug === "dvd-logo-simulator" ? (
              <StyledIframe
                title={iFrameData.title}
                src={iFrameData.src}
                scrolling="no"
              />
            ) : (
              <TitleImage {...imageProps} />
            )}

            {documentToReactComponents(fields.body, renderOptions)}
          </>
        )}
      </Article>
    </>
  );
};

export default ProjectDetail;
