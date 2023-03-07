import {useTranslation} from "react-i18next";

const Home = () => {
  const {t} = useTranslation();

  /*
  Contents:
  - Image and headline
  - Cards of some selected projects
  - Small about section
  */

  return (
    <div>
      {t("HOMEPAGE")} Other homepage content Other homepage content Other
      homepage content Other homepage content Other homepage content Other
      homepage content Other homepage content Other homepage content Other
      homepage content Other homepage content Other homepage content v Other
      homepage content Other homepage content xv Other homepage content{" "}
    </div>
  );
};

export default Home;
