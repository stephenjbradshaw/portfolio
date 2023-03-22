import {useTranslation} from "react-i18next";
import {useRouteError} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding-bottom: 4rem;
`;
interface Error {
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);
  const {t} = useTranslation();

  return (
    <>
      <Container>
        <h1>{t("OOPS")}</h1>
        <p>{t("SOMETHING_WENT_WRONG")}</p>
        <p>
          <i>{t(error.statusText || error.message)}</i>
        </p>
      </Container>
    </>
  );
};

export default ErrorPage;
