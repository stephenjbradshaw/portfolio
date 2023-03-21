import {ReactNode} from "react";
import {useMediaQuery} from "react-responsive";
import {
  IAboutSectionFields,
  IProjectFields,
} from "../schema/generated/contentful";
import {breakpoints} from "../styles/themes";
import {DataContext} from "./DataContext";
import useGetEntries from "./useGetEntries";

interface Props {
  children: ReactNode;
}

const DataService = ({children}: Props) => {
  const featuredProjects = useGetEntries<IProjectFields>({
    contentType: "project",
    isFeatured: true,
  });

  const aboutSection = useGetEntries<IAboutSectionFields>({
    contentType: "aboutSection",
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.mobile})`,
  });

  return (
    <DataContext.Provider
      value={{
        featuredProjects,
        aboutSection,
        isDesktop,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataService;
