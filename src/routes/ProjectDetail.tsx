import {useParams} from "react-router-dom";

const ProjectDetail = () => {
  const {projectId} = useParams();

  return <div>{`Project Detail page: ${projectId}`}</div>;
};

export default ProjectDetail;
