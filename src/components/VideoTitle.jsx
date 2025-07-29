import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[20%] px-7 absolute text-white">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-2/4">{overview}</p>
      <div className="pt-5">
        <button className="bg-white text-black hover:bg-opacity-80 py-1 px-7 rounded">
          ▶ Play
        </button>
        <button className="bg-white text-black py-1 px-7 rounded m-2">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
