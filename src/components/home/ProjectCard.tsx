import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Entry} from "contentful";
import styled from "styled-components";
import {IProjectFields} from "../../schema/generated/contentful";
import {BaseLink} from "../BaseElements";

interface CardImageProps {
  objectPosition: string;
}

const CardImage = styled.img<CardImageProps>`
  width: 100%;
  height: 23rem;
  object-fit: cover;
  border-radius: 10px;
  object-position: ${({objectPosition}) => objectPosition};
`;

interface Props {
  entry: Entry<IProjectFields>;
}

const ProjectCard = ({entry}: Props) => {
  const {fields} = entry;
  return (
    <li>
      <BaseLink to={`/projects/${fields.slug}`} state={{id: entry.sys.id}}>
        <CardImage
          alt={fields.cardImage.fields.title}
          src={`${fields.cardImage.fields.file.url}?fm=webp&w=500&h=500`}
          objectPosition={fields.cardImageObjectPosition}
        />
        <h3>{fields.title}</h3>
      </BaseLink>
      {documentToReactComponents(fields.previewText)}
    </li>
  );
};

export default ProjectCard;
