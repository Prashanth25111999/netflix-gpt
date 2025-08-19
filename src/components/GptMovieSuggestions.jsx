import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((state) => state?.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-2 m-2 bg-black bg-opacity-60">
      {movieNames.map((movieNames, index) => (
        <MovieList
          key={movieNames}
          title={movieNames}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
