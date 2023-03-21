import styled from "styled-components";

const Section = styled.section`
  margin: 0 ${({theme: {spacing}}) => spacing.sideMargin};
`;

const AboutSection = () => {
  return <Section></Section>;
};

export default AboutSection;
