import {BLOCKS, INLINES, Node} from "@contentful/rich-text-types";
import {Link} from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    [INLINES.EMBEDDED_ENTRY]: (node: Node) => {
      const {
        data: {
          target: {fields},
        },
      } = node;
      if (fields?.codeBlock) {
        return (
          <SyntaxHighlighter
            language={fields.language}
            style={atomOneDark}
            customStyle={{padding: "2rem", borderRadius: "7px"}}
          >
            {fields.codeBlock}
          </SyntaxHighlighter>
        );
      } else return null;
    },
  },
};
