import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import styled, {css} from "styled-components";
import {DataContext} from "../../data/DataContext";
import ErrorText from "../ErrorText";
import {Blurhash} from "react-blurhash";

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

interface StyledBlurhashProps {
  $isLoadingImage?: boolean;
}

const StyledBlurhash = styled(Blurhash)<StyledBlurhashProps>`
  position: absolute !important;
  opacity: ${({$isLoadingImage}) => ($isLoadingImage ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
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

const StyledErrorText = styled(ErrorText)`
  margin: 4rem 0 0 0;
`;

const HeadlineSection = () => {
  const {t} = useTranslation();
  const {
    isDesktop,
    headlineSection: {data, isLoading: isLoadingData, isError},
  } = useContext(DataContext);

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    setIsLoadingImage(true);
  }, [isDesktop]);

  const imageSettings = "?fm=webp&q=50";

  const landscapeUrl = data[0]?.fields
    ? `https:${data[0].fields.landscapeImage.fields.file.url}${imageSettings}`
    : "";

  const portraitUrl = data[0]?.fields
    ? `https:${data[0].fields.portraitImage.fields.file.url}${imageSettings}`
    : "";

  const landscapeBlurhash = "M6H24X00#N1Br.{@5vJX}*I^E3RjR.n#s:";
  const portraitBlurhash = "LAE{8cIX0eRj04xs$Mod-xk9}[R.";

  return (
    <>
      <Section>
        <ImageOverlay isLandscape={isDesktop}>
          {isDesktop ? (
            /* Landscape image */
            <>
              <StyledBlurhash
                hash={landscapeBlurhash}
                height="100vh"
                width="100%"
                $isLoadingImage={isLoadingData || isLoadingImage}
              />
              <picture>
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
                <Image
                  src={`${landscapeUrl}&w=800`}
                  alt="Stephen Bradshaw headshot"
                  onLoad={() => {
                    console.log("loaded landscape");
                    setIsLoadingImage(false);
                  }}
                />
              </picture>
            </>
          ) : (
            /* Portrait image */
            <>
              <StyledBlurhash
                hash={portraitBlurhash}
                height="100vh"
                width="100%"
                $isLoadingImage={isLoadingData || isLoadingImage}
              />
              <picture>
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
                  onLoad={() => {
                    console.log("loaded portrait");
                    setIsLoadingImage(false);
                  }}
                />
              </picture>
            </>
          )}
        </ImageOverlay>
        <TextContainer>
          <H1>Stephen Bradshaw</H1>
          <Headline>{t("HEADLINE")}</Headline>
        </TextContainer>
      </Section>
      {isError ? <StyledErrorText>{t("GENERAL_ERROR")}</StyledErrorText> : null}
    </>
  );
};

export default HeadlineSection;
