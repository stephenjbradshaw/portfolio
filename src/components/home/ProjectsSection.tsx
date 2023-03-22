import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {DataContext} from "../../data/DataContext";
import {BaseUl} from "../BaseElements";
import ErrorText from "../ErrorText";
import Loader from "../Loader";
import ProjectCard from "./ProjectCard";

const Section = styled.section`
  position: relative;
  padding: 4rem ${({theme: {spacing}}) => spacing.sideMargin};
  background-color: ${({theme: {colors}}) => colors.background};
  border-radius: 0 0 30px 30px;
`;

const Ul = styled(BaseUl)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(30rem, 100%), 1fr));
  gap: 5vw;
`;

const ProjectsSection = () => {
  const {t} = useTranslation();

  const {
    featuredProjects: {data, isLoading, isError},
  } = useContext(DataContext);

  data.sort(
    (a, b) =>
      (a.fields?.featuredProjectIndex ?? 0) -
      (b.fields?.featuredProjectIndex ?? 0)
  );

  return (
    <Section>
      <h2>{t("FEATURED_PROJECTS")}</h2>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorText>{t("PROJECT_LOAD_ERROR")}</ErrorText>
      ) : (
        <Ul>
          {data.map((entry) => {
            return <ProjectCard key={entry.fields.title} entry={entry} />;
          })}
        </Ul>
      )}
    </Section>
  );
};

export default ProjectsSection;
