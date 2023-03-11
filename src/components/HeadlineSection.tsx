import {useTranslation} from "react-i18next";
import {useMediaQuery} from "react-responsive";
import styled, {css} from "styled-components";
import {breakpoints} from "../styles/themes";
import headshotPortrait from "../images/headshotPortrait.webp";
import headshotLandscape from "../images/headshotLandscape.webp";

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
`;

const H1 = styled.h1`
  font-size: clamp(2.7rem, 8.5vw, 5rem);
  margin-bottom: 1.5rem;
`;

const Headline = styled.p`
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: bold;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 40px;
  margin: 0 ${({theme: {spacing}}) => spacing.sideMargin};
  color: ${({theme: {colors}}) => colors.lightText};
`;

const HeadlineSection = () => {
  const {t} = useTranslation();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.mobile})`,
  });

  return (
    <Section>
      <ImageOverlay isLandscape={isDesktop}>
        <Image
          src={isDesktop ? headshotLandscape : headshotPortrait}
          alt="Stephen Bradshaw headshot"
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
