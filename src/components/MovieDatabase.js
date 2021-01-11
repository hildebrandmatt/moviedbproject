import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processMovieArray, processMovie } from '../utilities/movieProcessor';

const MovieDatabase = () => {

    const [movieArray, setMovieArray] = useState(null)

    const fetchMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}popular${TMDB_API_KEY}&language=en-US&page=1`)
        let data = await res.json()
        let processedData = processMovieArray( data )
        setMovieArray(processedData)
    }

    fetchMovies()
    
    return (
        <div class="movie-info-card">
            <h2>{movieArray[0].title}</h2>
        </div>
    )

}

export default MovieDatabase