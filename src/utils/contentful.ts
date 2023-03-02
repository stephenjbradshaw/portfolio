import {createClient} from "contentful";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CONTENTFUL_SPACE_ID: string;
      REACT_APP_CONTENTFUL_ACCESS_TOKEN: string;
    }
  }
}

export const contentfulClient = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
});
