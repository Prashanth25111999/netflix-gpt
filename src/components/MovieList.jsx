import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className=" font-bold text-xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movies) => (
            <MovieCard key={movies.id} poster={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
