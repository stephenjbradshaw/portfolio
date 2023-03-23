import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {BaseUl} from "../components/BaseElements";

const Section = styled.section`
  padding: 0 ${({theme: {spacing}}) => spacing.sideMargin} 4rem;
  margin: auto auto;
  height: 100%;
  max-width: 99rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-top: 0;
  }
`;

const Ul = styled(BaseUl)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const Li = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;
`;

const About = () => {
  const {t} = useTranslation();

  return (
    <Section>
      <h2>{t("CONTACT")}</h2>
      <Ul>
        <Li key={"email"}>
          <i className="fa-solid fa-envelope" />
          <p className="visually-hidden">{t("EMAIL")}</p>
          hello@stephenbradshaw.dev
        </Li>
        <Li key={"phone"}>
          <i className="fa-solid fa-phone" />
          <p className="visually-hidden">{t("PHONE")}</p>
          +49 (0)176 56957881
        </Li>
        <Li>
          <i className="fa-solid fa-location-dot" />
          <p className="visually-hidden">{t("LOCATION")}</p>
          Berlin-Neukölln
        </Li>
      </Ul>
    </Section>
  );
};

export default About;
