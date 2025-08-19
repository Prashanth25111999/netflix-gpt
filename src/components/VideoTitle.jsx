import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[20%] px-7 absolute text-white">
      <h1 className="font-bold md:text-3xl text-lg">{title}</h1>
      <p className="w-2/4 hidden md:inline-block">{overview}</p>
      <div className="pt-5">
        <button className="bg-white text-black hover:bg-opacity-80 md:py-1 md:px-7 py-1 px-4 rounded">
          ▶ Play
        </button>
        <button className="bg-white text-black py-1 px-7 rounded m-2 hidden md:inline-block">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
