import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processMovieArray } from '../utilities/movieProcessor';

const MovieDatabase = () => {

    const [movieArray, setMovieArray] = useState(null)

    const fetchMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}popular${TMDB_API_KEY}&language=en-US&page=1`)
        let data = await res.json()
        let processedData = await processMovieArray(data, 12)
        setMovieArray(processedData)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    //console.log(movieArray)

    return (
        <div class="movie-gallery">
            { movieArray &&
            movieArray.map((movie) => {
                return (
                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={ "https://image.tmdb.org/t/p/w500" + movie.poster } />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>{movie.description}</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <p class="poster-intro-title">{movie.title}</p>
                                    <p class="poster-intro-date">{movie.release_date}</p>
                                    <p class="poster-intro-rating">{movie.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default MovieDatabase