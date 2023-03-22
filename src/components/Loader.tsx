import {useTranslation} from "react-i18next";
import styled from "styled-components";

const LoadingText = styled.p`
  text-align: center;
  margin: 2rem 5rem;
`;

const Loader = () => {
  const {t} = useTranslation();

  return <LoadingText>{t("LOADING")}</LoadingText>;
};

export default Loader;
