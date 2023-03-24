import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import styled, {css} from "styled-components";
import {DataContext} from "../../data/DataContext";
import ErrorText from "../ErrorText";
import Loader from "../Loader";

const Section = styled.section`
  position: relative;
`;

const linearGradient = css`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 90%);
`;

const radialGradient = css`
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

interface ImageOverlayProps {
  isLandscape: boolean;
  imageLoaded: boolean;
}

const ImageOverlay = styled.div<ImageOverlayProps>`
  width: 100%;
  margin-top: -${({theme: {spacing}}) => spacing.headerHeight};
  ${({isLandscape}) => (isLandscape ? radialGradient : linearGradient)}
  opacity: ${({imageLoaded}) => (imageLoaded ? 1 : 0)}
`;

const Image = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  margin-top: -${({theme: {spacing}}) => spacing.headerHeight};
  object-fit: cover;
  object-position: 75% 20%;
`;

const H1 = styled.h1`
  font-size: clamp(3rem, 8.5vw, 6rem);
  margin-bottom: 1.5rem;
`;

const Headline = styled.p`
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: bold;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: clamp(8rem, 7vw, 12rem);
  margin: 0 ${({theme: {spacing}}) => spacing.sideMargin};
  color: ${({theme: {colors}}) => colors.lightText};
`;

const HeadlineSection = () => {
  const {t} = useTranslation();
  const {
    isDesktop,
    headlineSection: {data, isLoading, isError},
  } = useContext(DataContext);

  const [imageLoaded, setImageLoaded] = useState(false);

  if (isLoading) {
    return (
      <Section>
        <Loader />
      </Section>
    );
  }

  if (isError || (!isLoading && data.length === 0)) {
    <ErrorText>{t("GENERAL_ERROR")}</ErrorText>;
  }

  const {fields} = data[0];
  const landscapeUrl = fields.landscapeImage.fields.file.url;
  const portraitUrl = fields.portraitImage.fields.file.url;

  return (
    <Section>
      <ImageOverlay isLandscape={isDesktop} imageLoaded={imageLoaded}>
        <Image
          src={isDesktop ? landscapeUrl : portraitUrl}
          alt="Stephen Bradshaw headshot"
          onLoad={() => setImageLoaded(true)}
        />
      </ImageOverlay>
      <TextContainer>
        <H1>Stephen Bradshaw</H1>
        <Headline>{t("HEADLINE")}</Headline>
      </TextContainer>
    </Section>
  );
};

export default HeadlineSection;
