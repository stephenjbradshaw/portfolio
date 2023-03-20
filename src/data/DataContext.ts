import {Entry} from "contentful";
import {createContext} from "react";
import {IProjectFields} from "../schema/generated/contentful";

interface Data {
  featuredProjects: Entry<IProjectFields>[] | [];
  isError: boolean;
  isLoading: boolean;
  isDesktop: boolean;
}

export const DataContext = createContext<Data>({
  featuredProjects: [],
  isError: false,
  isLoading: true,
  isDesktop: false,
});
