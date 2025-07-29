import { useEffect } from "react";
import { addTrailers } from "../store/slices/moviesSlice";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailor = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                OPTIONS
            );
            const json = await response.json();


            const filterTrailers = json?.results.filter(
                (video) => video.type === "Trailer"
            );

            const trailer = filterTrailers?.length
                ? filterTrailers[0]
                : json?.results[0];

            dispatch(addTrailers(trailer));
        } catch (error) { }
    };

    useEffect(() => {
        getMovieTrailor();
    }, []);

}
export default useTrailerVideo