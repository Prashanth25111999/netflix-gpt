import { useDispatch } from "react-redux"
import { OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addUpcomingMovies } from "../store/slices/moviesSlice"

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming", OPTIONS)
            const json = await response.json()
            console.log(json)
            dispatch(addUpcomingMovies(json.results))
        } catch (error) {

        }
    }
    useEffect(() => { getUpcomingMovies() }, [])
}
export default useUpcomingMovies