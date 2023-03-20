import styled from "styled-components";
import LangSelect from "./LangSelect";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

const FooterElement = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 2vw;
  margin: 0 ${({theme: {spacing}}) => spacing.sideMargin};
`;

const Footer = () => {
  return (
    <FooterElement>
      <p>Stephen Bradshaw</p>
      <SocialLinks fontSize="2rem" />
      <LangSelect fontSize="1.6rem" />
      <Nav isFooter />
    </FooterElement>
  );
};

export default Footer;
