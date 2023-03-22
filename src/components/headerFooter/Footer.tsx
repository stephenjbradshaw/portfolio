import {useLocation} from "react-router-dom";
import styled from "styled-components";
import LangSelect from "./LangSelect";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

const FooterElement = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 4rem ${({theme: {spacing}}) => spacing.sideMargin};
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const Footer = () => {
  const {pathname} = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome ? <hr /> : null}
      <FooterElement>
        <Name>Stephen Bradshaw</Name>
        <Nav isFooter />
        <LangSelect fontSize="1.6rem" />
        <SocialLinks fontSize="2rem" />
      </FooterElement>
    </>
  );
};

export default Footer;
