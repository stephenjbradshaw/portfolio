import {useTranslation} from "react-i18next";
import {Paragraph} from "../typography/Paragraph";

const Contact = () => {
  const {t} = useTranslation();

  return <Paragraph>{t("CONTACT")}</Paragraph>;
};

export default Contact;
