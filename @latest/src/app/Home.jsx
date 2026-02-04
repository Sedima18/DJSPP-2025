import PodcastGrid from "../components/PodcastGrid";
import Carousel from "../components/Carousel";

// replace with API data later
const mockPodcasts = [];

const Home = () => {
  return (
    <>
      <h1>Podcasts</h1>
      <Carousel podcasts={mockPodcasts} />
      <PodcastGrid podcasts={mockPodcasts} />
    </>
  );
};

export default Home;
app/ShowDetail.jsx
import { useParams } from "react-router-dom";

const ShowDetail = () => {
  const { id } = useParams();

  return <h1>Show Details for ID: {id}</h1>;
};

export default ShowDetails;