import {useTranslation} from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();

  return <p>{t("CONTACT")}</p>;
};

export default Contact;
