import {useTranslation} from "react-i18next";
import {Paragraph} from "../typography/Paragraph";

const Error = () => {
  const {t} = useTranslation();
  return <Paragraph>{t("GENERAL_ERROR")}</Paragraph>;
};

export default Error;
