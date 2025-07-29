import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
    const getNowPlayingMovies = async () => {
        const URL =
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
        try {
            const response = await fetch(URL, OPTIONS);
            const json = await response.json();

            dispatch(addNowPlayingMovies(json.results))
        } catch (error) { }
    };

}
export default useNowPlayingMovies