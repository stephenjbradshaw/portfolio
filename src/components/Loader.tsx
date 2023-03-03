import {useTranslation} from "react-i18next";

const Loader = () => {
  const {t} = useTranslation();

  return <p>{t("LOADING")}</p>;
};

export default Loader;
