import {useTranslation} from "react-i18next";
import {useRouteError} from "react-router-dom";

interface Error {
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);
  const {t} = useTranslation();

  return (
    <div>
      <h1>{t("OOPS")}</h1>
      <p>{t("SOMETHING_WENT_WRONG")}</p>
      <p>
        <i>{t(error.statusText || error.message)}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
