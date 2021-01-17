import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processMovieArray } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';

const MovieDatabase = props => {

    const [movieArray, setMovieArray] = useState(null)

    const fetchMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}${props.sortOrder}${TMDB_API_KEY}&language=en-US&page=1`)
        let data = await res.json()
        let processedData = await processMovieArray(data, 12)
        setMovieArray(processedData)
    }

    useEffect(() => {
        fetchMovies()
    }, [props.sortOrder])

    return (
        <div class="movie-gallery">
            { movieArray &&
            movieArray.map((movie) => {
                return (
                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={ "https://image.tmdb.org/t/p/w500" + movie.poster } />
                        </div>
                        <FavoriteButton movieID={movie.id} />
                        <div class="description">
                            <div class="hover-info">
                                <p>{movie.description}</p>
                                <NavLink to={ "/single-movie/" + movie.id } exact><button class="more-info-btn">More info</button></NavLink>
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