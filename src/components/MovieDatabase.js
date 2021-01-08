import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';

const MovieDatabase = () => {

    const [mostPopularMovie, setMostPopularMovie] = useState(null)

    const fetchPopularMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}popular${TMDB_API_KEY}&language=en-US&page=1$`)
        let data = await res.json()
        setMostPopularMovie(data)
    }
    
    //const movieList = fetchPopularMovies()
    //fetchPopularMovies()
    console.log("hello")
    console.log(mostPopularMovie)

    return (
        <p>Hello this is kind of working!</p>
        //<p>{mostPopularMovie.title}</p>
    )

}

export default MovieDatabase