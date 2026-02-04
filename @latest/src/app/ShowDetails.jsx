import { useParams } from "react-router-dom";

const ShowDetail = () => {
  const { id } = useParams();

  return <h1>Show Details for ID: {id}</h1>;
};

export default ShowDetail;