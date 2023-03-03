import {useTranslation} from "react-i18next";

const Error = () => {
  const {t} = useTranslation();
  return <p>{t("GENERAL_ERROR")}</p>;
};

export default Error;
