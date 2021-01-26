import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processMovieArray } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';
import missingPoster from '../images/placeholderPoster.PNG'

const MovieDatabase = props => {

    const [movieArray, setMovieArray] = useState(null)

    const fetchMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}${props.sortOrder}${TMDB_API_KEY}&language=en-US&page=${props.pageNumber}`)
        let data = await res.json()
        let processedData = await processMovieArray(data, 20)
        setMovieArray(processedData)
    }

    useEffect(() => {
        fetchMovies()
    }, [props.sortOrder, props.pageNumber])

    return (
        <div className="movie-gallery">
            { movieArray &&
            movieArray.map((movie) => {
                return (
                    <div className="movie-info-card" key={movie.id}>
                        <div className="poster">
                            <img src={movie.poster ? "https://image.tmdb.org/t/p/w500" + movie.poster : missingPoster } alt={"Poster for " +  movie.title} />
                        </div>
                        <FavoriteButton movieID={movie.id} />
                        <div className="description">
                            <div className="hover-info">
                                <p>{movie.description}</p>
                                <NavLink to={ "/single-movie/" + movie.id } exact><button className="more-info-btn" aria-label="more info button">More info</button></NavLink>
                            </div>
                            <div className="quick-intro">
                                <div className="poster-title">
                                    <p className="poster-intro-title">{movie.title}</p>
                                    <p className="poster-intro-date">{movie.release_date}</p>
                                    <p className="sr-only">Rated {movie.rating} out of 10.</p>
                                    <RatingStars rating={movie.rating} />
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