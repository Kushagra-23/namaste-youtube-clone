import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API + process.env.GOOGLE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
