import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { projectName } = useParams();
  return <div>{projectName}</div>;
}
