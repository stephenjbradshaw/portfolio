import {BLOCKS, INLINES, Node} from "@contentful/rich-text-types";
import {createClient} from "contentful";
import {Link} from "react-router-dom";

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

// Specify what components to render when rendering rich text
export const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const {
        data: {
          target: {fields},
        },
      } = node;
      return (
        <img
          alt={fields.title}
          src={`${fields.file.url}?fm=webp&w=300&h=300`}
        />
      );
    },
    // TODO: Skipped typecheck - "Inline" type doesn't seem to work?
    [INLINES.HYPERLINK]: (inline: any) => {
      const {
        data: {uri},
        content: [{value}],
      } = inline;
      return <Link to={uri}>{value}</Link>;
    },
  },
};
