import {Entry} from "contentful";
import {createContext} from "react";
import {
  IAboutSectionFields,
  IProjectFields,
} from "../schema/generated/contentful";

interface ContentState<T> {
  data: Entry<T>[] | [];
  isLoading: boolean;
  isError: boolean;
}
interface Data {
  isDesktop: boolean;
  featuredProjects: ContentState<IProjectFields>;
  aboutSection: ContentState<IAboutSectionFields>;
}

const defaultState = {
  data: [],
  isLoading: true,
  isError: false,
};

export const DataContext = createContext<Data>({
  featuredProjects: {...defaultState},
  aboutSection: {...defaultState},
  isDesktop: false,
});
