import React from "react";
import { useSelector } from "react-redux";
import { formatViews } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`p-2 ${isMenuOpen ? "m-4" : "m-[14px]"} ${
        isMenuOpen ? "w-80" : "w-72"
      } shadow-lg rounded-lg h-[350px] hover:bg-gray-200`}
    >
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-thin">{channelTitle}</li>
        <li className="font-thin">{formatViews(statistics?.viewCount)}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
