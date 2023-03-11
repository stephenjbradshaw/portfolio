import {useTranslation} from "react-i18next";
import styled from "styled-components";
import headshot from "../images/headshot.webp";

const Section = styled.section`
  position: relative;
`;

const ImageOverlay = styled.div`
  width: 100%;
  margin-top: -${({theme: {spacing}}) => spacing.headerHeight};
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 90%);
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

  return (
    <Section>
      <ImageOverlay>
        <Image src={headshot} alt="Stephen Bradshaw headshot" />
      </ImageOverlay>
      <TextContainer>
        <H1>Stephen Bradshaw</H1>
        <Headline>{t("HEADLINE")}</Headline>
      </TextContainer>
    </Section>
  );
};

export default HeadlineSection;
