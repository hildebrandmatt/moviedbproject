import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processMovieArray, processMovie } from '../utilities/movieProcessor';

const MovieDatabase = ( sortParameter ) => {

    const [mostPopularMovie, setMostPopularMovie] = useState(null)

    const fetchPopularMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}popular${TMDB_API_KEY}&language=en-US&page=1$`)
        let data = await res.json()
        let processedData = processMovieArray( data )
        console.log(processedData)
    }

    const fetchNowPlayingMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}now_playing${TMDB_API_KEY}&language=en-US&page=1$`)
        let data = await res.json()
        let processedData = processMovieArray( data )
        console.log(processedData)
    }

    const fetchTopRatedMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}top_rated${TMDB_API_KEY}&language=en-US&page=1$`)
        let data = await res.json()
        let processedData = processMovieArray( data )
        console.log(processedData)
    }

    const fetchUpcomingMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}upcoming${TMDB_API_KEY}&language=en-US&page=1$`)
        let data = await res.json()
        let processedData = processMovieArray( data )
        console.log(processedData)
    }
    
    if (sortParameter == "upcoming") {
        fetchUpcomingMovies()
    } else if (sortParameter == "top_rated") {
        fetchTopRatedMovies()
    } else if (sortParameter == "now_playing") {
        fetchNowPlayingMovies()
    } else {
        fetchPopularMovies()
    }
    
    return (
        <p>Hello this is kind of working!</p>
        //<p>{mostPopularMovie.title}</p>
    )

}

export default MovieDatabase