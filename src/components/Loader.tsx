import {useTranslation} from "react-i18next";
import {Paragraph} from "../typography/Paragraph";

const Loader = () => {
  const {t} = useTranslation();

  return <Paragraph>{t("LOADING")}</Paragraph>;
};

export default Loader;
