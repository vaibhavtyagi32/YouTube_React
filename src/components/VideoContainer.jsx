import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      const json = await response.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (  
      <div className="flex flex-wrap gap-5">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        ))}
      </div>
  );
};

export default VideoContainer;
