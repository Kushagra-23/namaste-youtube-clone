import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constant";
import { formatViews } from "../utils/helper";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_DETAILS_API +
        searchParams.get("v") +
        "&key=" +
        process.env.GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoDetails(json.items[0]);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="flex flex-col">
          <iframe
            className="rounded-lg"
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <p className="pt-2 font-bold text-xl">
              {videoDetails?.snippet?.title}
            </p>
            <p className="font-mono">{videoDetails?.snippet?.channelTitle}</p>
            <div className="flex justify-between">
              <p className="font-mono">
                {formatViews(videoDetails?.statistics?.viewCount)}
              </p>
              <div>
                <button className="w-20 h-8 mx-2 rounded-lg font-medium bg-green-400">
                  Like
                </button>
                <button className="w-20 h-8 mx-2 rounded-lg text-white font-medium bg-blue-400">
                  Share
                </button>
                <button className="w-20 h-8 mx-2 rounded-lg text-white font-medium bg-red-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer
        noOfComments={videoDetails?.statistics?.commentCount}
      />
    </div>
  );
};

export default WatchPage;
