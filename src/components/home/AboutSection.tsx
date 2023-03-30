import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {DataContext} from "../../data/DataContext";
import {renderOptions} from "../../utils/contentful";
import {ActionButtonLink} from "../Buttons";
import ErrorText from "../ErrorText";
import Loader from "../Loader";

const Section = styled.section`
  margin-top: -3rem;
  padding: 8rem ${({theme: {spacing}}) => spacing.sideMargin};
  border-radius: 0 0 30px 30px;
  color: ${({theme: {colors}}) => colors.lightText};
  background: ${({theme: {colors}}) => colors.darkGrey};
`;

const InnerContainer = styled.div`
  max-width: 100rem;
  margin: auto;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const AboutSection = () => {
  const {t} = useTranslation();

  const {
    aboutSection: {data, isLoading, isError},
  } = useContext(DataContext);

  const fields = data[0]?.fields;

  return (
    <Section>
      <InnerContainer>
        <h3>{t("A_BIT_ABOUT_ME")}</h3>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorText>{t("GENERAL_ERROR")}</ErrorText>
        ) : (
          <div className="main-content">
            {documentToReactComponents(fields.body, renderOptions)}
          </div>
        )}
        <ActionButtonLink to="about">{t("MORE_ABOUT_ME")}</ActionButtonLink>
      </InnerContainer>
    </Section>
  );
};

export default AboutSection;
