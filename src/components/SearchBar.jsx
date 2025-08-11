import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const language = useSelector((state) => state.langConfig.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12  rounded">
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-3 m-4 col-span-9"
        />
        <button className="bg-red-700 rounded py-2 px-4 text-white col-span-3 m-4">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
