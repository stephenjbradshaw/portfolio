import {Entry} from "contentful";
import {createContext} from "react";
import {
  IAboutPageFields,
  IAboutSectionFields,
  IHeadlineSectionFields,
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
  aboutPage: ContentState<IAboutPageFields>;
  headlineSection: ContentState<IHeadlineSectionFields>;
}

const defaultState = {
  data: [],
  isLoading: true,
  isError: false,
};

export const DataContext = createContext<Data>({
  featuredProjects: {...defaultState},
  aboutSection: {...defaultState},
  aboutPage: {...defaultState},
  headlineSection: {...defaultState},
  isDesktop: false,
});
