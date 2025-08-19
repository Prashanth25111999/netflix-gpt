import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../store/slices/moviesSlice"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((state) => state.movies.topRatedMovies)

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated", OPTIONS)
            const json = await response.json()
            dispatch(addTopRatedMovies(json.results))
        } catch (error) {

        }
    }
    useEffect(() => { !topRatedMovies && getTopRatedMovies() }, [])
}
export default useTopRatedMovies