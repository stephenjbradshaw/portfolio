import styled from "styled-components";
import headshot from "../images/headshot.webp";

const HeadlineImage = styled.img`
  width: 100%;
  margin-top: -${({theme: {spacing}}) => spacing.headerHeight};
`;

const HeadlineSection = () => {
  return <HeadlineImage src={headshot} alt="Stephen Bradshaw headshot" />;
};

export default HeadlineSection;
