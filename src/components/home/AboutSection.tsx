import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {DataContext} from "../../data/DataContext";
import ErrorText from "../ErrorText";
import Loader from "../Loader";

const Section = styled.section`
  margin-top: -3rem;
  padding: 8rem ${({theme: {spacing}}) => spacing.sideMargin};
  border-radius: 0 0 15px 15px;
  color: ${({theme: {colors}}) => colors.lightText};
  background: ${({theme: {colors}}) => colors.darkGrey};
`;

const AboutSection = () => {
  const {t} = useTranslation();

  const {
    aboutSection: {data, isLoading, isError},
  } = useContext(DataContext);

  const fields = data[0]?.fields;

  return (
    <Section>
      <h3>{t("A_BIT_ABOUT_ME")}</h3>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorText>{t("GENERAL_ERROR")}</ErrorText>
      ) : (
        documentToReactComponents(fields.body)
      )}
    </Section>
  );
};

export default AboutSection;