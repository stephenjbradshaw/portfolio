import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled, {css} from "styled-components";
import {DataContext} from "../../data/DataContext";
import ErrorText from "../ErrorText";

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
}

const ImageOverlay = styled.div<ImageOverlayProps>`
  width: 100%;
  margin-top: -${({theme: {spacing}}) => spacing.headerHeight};
  ${({isLandscape}) => (isLandscape ? radialGradient : linearGradient)}
`;

const imageStyle = css`
  position: relative;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  margin-top: -${({theme: {spacing}}) => spacing.headerHeight};
  object-fit: cover;
  object-position: 75% 20%;
`;

const Image = styled.img`
  ${imageStyle}
`;

const Blurhash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${imageStyle}
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

  const imageSettings = "?fm=jpg&fl=progressive&q=50";

  const landscapeUrl = data[0]?.fields
    ? `https:${data[0].fields.landscapeImage.fields.file.url}${imageSettings}`
    : "";

  const portraitUrl = data[0]?.fields
    ? `https:${data[0].fields.portraitImage.fields.file.url}${imageSettings}`
    : "";

  return (
    <Section>
      <ImageOverlay isLandscape={isDesktop}>
        {isLoading ? (
          <Blurhash />
        ) : isError ? (
          <Blurhash>
            <ErrorText>{t("GENERAL_ERROR")}</ErrorText>
          </Blurhash>
        ) : (
          <picture>
            {/* Landscape image */}
            <source
              srcSet={`${landscapeUrl}&w=1920`}
              media="(min-width: 1600px)"
            />
            <source
              srcSet={`${landscapeUrl}&w=1600`}
              media="(min-width: 1366px)"
            />
            <source
              srcSet={`${landscapeUrl}&w=1366`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`${landscapeUrl}&w=1024`}
              media="(min-width: 768px)"
            />
            {/* Portrait image */}
            <source
              srcSet={`${portraitUrl}&w=768`}
              media="(min-width: 640px)"
            />
            <source
              srcSet={`${portraitUrl}&w=640`}
              media="(min-width: 320px)"
            />
            <Image
              src={`${portraitUrl}&w=320`}
              alt="Stephen Bradshaw headshot"
            />
          </picture>
        )}
      </ImageOverlay>
      <TextContainer>
        <H1>Stephen Bradshaw</H1>
        <Headline>{t("HEADLINE")}</Headline>
      </TextContainer>
    </Section>
  );
};

export default HeadlineSection;
