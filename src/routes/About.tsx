import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import ErrorText from "../components/ErrorText";
import Loader from "../components/Loader";
import {DataContext} from "../data/DataContext";

const Section = styled.section`
  padding: 0 ${({theme: {spacing}}) => spacing.sideMargin} 4rem;
  margin: auto;
  height: 100%;
  max-width: 99rem;
  h2 {
    margin-top: 0;
  }
`;

const About = () => {
  const {t} = useTranslation();

  const {
    aboutPage: {data, isError, isLoading},
  } = useContext(DataContext);

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorText>{t("GENERAL_ERROR")}</ErrorText>
      ) : (
        <>
          <h2>{t("ABOUT_ME")}</h2>
          {documentToReactComponents(data[0].fields.body)}
        </>
      )}
    </Section>
  );
};

export default About;
