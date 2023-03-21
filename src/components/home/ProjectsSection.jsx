import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {DataContext} from "../../data/DataContext";
import {BaseUl, BaseLink} from "../BaseElements";
import Loader from "../Loader";

const Section = styled.section`
  margin: 0 ${({theme: {spacing}}) => spacing.sideMargin};
`;

const Ul = styled(BaseUl)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(30rem, 100%), 1fr));
  gap: 5vw;
`;

const Li = styled.li`
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 10px;
    object-position: 50% 15%;
  }
`;

const ProjectsSection = () => {
  const {t} = useTranslation();

  const {featuredProjects, isError, isLoading} = useContext(DataContext);

  if (isError) {
    throw new Error("GENERAL_ERROR");
  }

  return (
    <Section>
      <h2>{t("FEATURED_PROJECTS")}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <Ul>
          {featuredProjects.map((entry) => {
            const {fields} = entry;
            return (
              <Li key={fields.title}>
                <BaseLink to={fields.slug} state={{id: entry.sys.id}}>
                  <img
                    alt={fields.mainImage.fields.title}
                    src={`${fields.mainImage.fields.file.url}?fm=webp&w=500&h=500`}
                  />
                  <h3>{fields.title}</h3>
                  {documentToReactComponents(fields.previewText)}
                </BaseLink>
              </Li>
            );
          })}
        </Ul>
      )}
    </Section>
  );
};

export default ProjectsSection;
