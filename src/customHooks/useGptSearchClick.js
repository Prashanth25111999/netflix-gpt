import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../store/slices/gptSlice";
import client from "../utils/openai";
import { useRef } from "react";
import { OPTIONS } from "../utils/constants";

const useGptSearchClick = () => {

    const dispatch = useDispatch();
    const inputValue = useRef();

    const handlegptsearchClick = async (e) => {
        const query = inputValue.current?.value?.trim();
        if (!query) return alert("Please enter a movie query");
        const gptQuery =
            "Act as a Movie Recomendation syatem and suggest some movies for query: " +
            query +
            " only give me names of 5 movies, comma seperated like the example given ahead example result: Gadar,Don,KGF,Golmal,Pushpa";
        try {
            const response = await client.responses.create({
                model: "gpt-3.5-turbo",
                input: [{ role: "user", content: gptQuery }],
            });
            console.log(response?.output_text);
            const gptQueryResults = response?.output_text?.split(",");
            console.log(gptQueryResults);
            const data = gptQueryResults?.map((movie, index) =>
                fetchSearchMovies(movie)
            );
            console.log(data);
            const tmdbResults = await Promise.all(data);
            console.log(tmdbResults);
            dispatch(
                addGptMovieResults({
                    movieNames: gptQueryResults,
                    movieResults: tmdbResults,
                })
            );
            // const flat = tmdbResults.flatMap((item) => item);
            // console.log(flat);
        } catch (error) {
            console.error("Error fetching GPT response:", error);
        }
    };

    const fetchSearchMovies = async (movie) => {
        const response = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            OPTIONS
        );
        const json = await response.json();
        console.log(json);
        return json.results;
    };


    return { inputValue, handlegptsearchClick };

}
export default useGptSearchClick;