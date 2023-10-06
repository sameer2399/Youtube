import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  if (!info) return <div>Loading...</div>;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="md:p-2 md:m-2 md:w-[350px] mt-2 mr-0 mb-2 pl-5 pr-2 shadow-lg">
      <img className="rounded-lg" src={thumbnails.high.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
