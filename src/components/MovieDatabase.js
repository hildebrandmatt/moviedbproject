import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processMovieArray, processMovie } from '../utilities/movieProcessor';

const MovieDatabase = () => {

    const [movieArray, setMovieArray] = useState(null)

    const fetchMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}popular${TMDB_API_KEY}&language=en-US&page=1`)
        let data = await res.json()
        let processedData = processMovieArray(data)
        setMovieArray(processedData)
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    console.log(movieArray)

    return (
        <div class="movie-info-card">
            { movieArray &&
                <div class="poster">
                    <img src={ "https://image.tmdb.org/t/p/w500" + movieArray[0].poster } />
                </div>
            }
            { movieArray &&
                <div class="description">
                    <div class="hover-info">
                        <button class="poster-fave-button">heart</button>
                        <p>{movieArray[0].description}</p>
                        <button class="more-info-btn">More info</button>
                    </div>
                    <div class="quick-intro">
                        <div class="poster-title">
                            <h1>{movieArray[0].title}</h1>
                            <h3>{movieArray[0].release_date}</h3>
                            <p>{movieArray[0].rating}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )

}

export default MovieDatabase