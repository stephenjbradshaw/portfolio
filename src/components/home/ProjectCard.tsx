import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Entry} from "contentful";
import styled from "styled-components";
import {IProjectFields} from "../../schema/generated/contentful";
import {BaseLink} from "../BaseElements";

const Li = styled.li`
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 10px;
    object-position: 50% 15%;
  }
`;

interface Props {
  entry: Entry<IProjectFields>;
}

const ProjectCard = ({entry}: Props) => {
  const {fields} = entry;
  return (
    <Li key={fields.title}>
      <BaseLink to={`/projects/${fields.slug}`} state={{id: entry.sys.id}}>
        <img
          alt={fields.mainImage.fields.title}
          src={`${fields.mainImage.fields.file.url}?fm=webp&w=500&h=500`}
        />
        <h3>{fields.title}</h3>
      </BaseLink>
      {documentToReactComponents(fields.previewText)}
    </Li>
  );
};

export default ProjectCard;
