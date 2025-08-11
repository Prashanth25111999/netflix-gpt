import React from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const SearchPage = () => {
  return (
    <div>
      <div className="absolute -z-30">
        <img src={BACKGROUND_IMG} alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <SearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default SearchPage;
