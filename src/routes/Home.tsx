import {useTranslation} from "react-i18next";

const Home = () => {
  const {t} = useTranslation();

  /*
  Contents:
  - Image and headline
  - Cards of some selected projects
  - Small about section
  */

  return <div>{t("HOMEPAGE")}</div>;
};

export default Home;
