import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../store/slices/moviesSlice"
import { useDispatch, useSelector } from "react-redux"

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const popularMovies = useSelector((state) => state.movies.popularMovies)

    const getPopularMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", OPTIONS)
            const json = await response.json()
            dispatch(addPopularMovies(json.results))
        }
        catch (error) {

        }
    }

    useEffect(() => { !popularMovies && getPopularMovies() }, [])
}

export default usePopularMovies