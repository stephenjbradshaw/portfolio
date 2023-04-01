import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {BaseArticle} from "../components/BaseElements";
import ErrorText from "../components/ErrorText";
import Loader from "../components/Loader";
import {DataContext} from "../data/DataContext";
import {renderOptions} from "../utils/richTextOptions";

const Section = styled.section`
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
        <BaseArticle>
          <h2>{t("ABOUT_ME")}</h2>
          {documentToReactComponents(data[0].fields.body, renderOptions)}
        </BaseArticle>
      )}
    </Section>
  );
};

export default About;
