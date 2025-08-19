import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import client from "../utils/openai";
// import { OPTIONS } from "../utils/constants";
// import { addGptMovieResults } from "../store/slices/gptSlice";
import useGptSearchClick from "../customHooks/useGptSearchClick";

const SearchBar = () => {
  const language = useSelector((state) => state.langConfig.lang);
  // const inputValue = useRef();
  // const dispatch = useDispatch();

  // const handlegptsearchClick = async (e) => {
  //   const query = inputValue.current.value.trim();
  //   if (!query) return alert("Please enter a movie query");
  //   const gptQuery =
  //     "Act as a Movie Recomendation syatem and suggest some movies for query: " +
  //     query +
  //     " only give me names of 5 movies, comma seperated like the example given ahead example result: Gadar,Don,KGF,Golmal,Pushpa";
  //   try {
  //     const response = await client.responses.create({
  //       model: "gpt-3.5-turbo",
  //       input: [{ role: "user", content: gptQuery }],
  //     });
  //     console.log(response?.output_text);
  //     const gptQueryResults = response?.output_text?.split(",");
  //     console.log(gptQueryResults);
  //     const data = gptQueryResults?.map((movie, index) =>
  //       fetchSearchMovies(movie)
  //     );
  //     console.log(data);
  //     const tmdbResults = await Promise.all(data);
  //     console.log(tmdbResults);
  //     dispatch(
  //       addGptMovieResults({
  //         movieNames: gptQueryResults,
  //         movieResults: tmdbResults,
  //       })
  //     );
  //     // const flat = tmdbResults.flatMap((item) => item);
  //     // console.log(flat);
  //   } catch (error) {
  //     console.error("Error fetching GPT response:", error);
  //   }
  // };

  // const fetchSearchMovies = async (movie) => {
  //   const response = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //       movie +
  //       "&include_adult=false&language=en-US&page=1",
  //     OPTIONS
  //   );
  //   const json = await response.json();
  //   console.log(json);
  //   return json.results;
  // };

  // const handlegptsearchClick = useGptSearchClick();
  // console.log(handlegptsearchClick);

  //const fetchSearchMovies = async (movie) => {
  //       const response = await fetch(
  //           "https://api.themoviedb.org/3/search/movie?query=" +
  //           movie +
  //           "&include_adult=false&language=en-US&page=1",
  //           OPTIONS
  //       );
  //       const json = await response.json();
  //       console.log(json);
  //       return json.results;
  //   };

  const { handlegptsearchClick, inputValue } = useGptSearchClick();

  return (
    <div className="md:pt-[10%] pt-[45%] flex justify-center">
      <form
        className="bg-black md:w-1/2 w-full grid grid-cols-12  rounded "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputValue}
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-3 m-4 col-span-9"
        />
        <button
          className="bg-red-700 rounded py-2 px-4 text-white col-span-3 m-4"
          onClick={handlegptsearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
