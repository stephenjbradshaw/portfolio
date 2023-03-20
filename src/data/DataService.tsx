import {ReactNode} from "react";
import {useMediaQuery} from "react-responsive";
import {DataContext} from "./DataContext";
import useGetEntries from "./useGetEntries";
import {IProjectFields} from "../schema/generated/contentful";
import {breakpoints} from "../styles/themes";

interface Props {
  children: ReactNode;
}

const DataService = ({children}: Props) => {
  const {
    data: featuredProjects,
    isLoading,
    isError,
  } = useGetEntries<IProjectFields>({contentType: "project", isFeatured: true});

  featuredProjects.sort(
    (a, b) =>
      (a.fields?.featuredProjectIndex ?? 0) -
      (b.fields?.featuredProjectIndex ?? 0)
  );

  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.mobile})`,
  });

  return (
    <DataContext.Provider
      value={{featuredProjects, isLoading, isError, isDesktop}}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataService;
