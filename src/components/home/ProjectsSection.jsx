import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { breakpoints } from "../../styles/themes";

const Section = styled.section`
  position: relative;
`;

const ProjectsSection = () => {
  const {t} = useTranslation();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.mobile})`,
  });

  return (
    <Section>
      <h2>{t("FEATURED_PROJECTS")}</h2>
    </Section>
  );
};

export default ProjectsSection;
