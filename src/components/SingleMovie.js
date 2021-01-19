import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processSingleMovie } from '../utilities/movieProcessor';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';

const SingleMovie = () => {

    const id = window.location.pathname.substring(14)
    
    const [movieInfo, setMovieInfo] = useState(null)

    const fetchMovie = async () => {
        const res = await fetch(`${TMDB_BASE_URL}${id}${TMDB_API_KEY}&language=en-US`)
        let data = await res.json()
        let processedData = await processSingleMovie(data)
        setMovieInfo(processedData)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <main>
        {movieInfo &&
            <div className="single-movie-content">
                <div className="about-movie-poster-and-title">
                    <div className="about-movie-poster-box">
                        <img src={ "https://image.tmdb.org/t/p/w500" + movieInfo.poster } class="about-movie-poster"/>
                    </div>
                    <h3 class="about-movie-title">{movieInfo.title}</h3>
                </div>
                <div class="about-movie-box">
                    <div class="about-movie-quick-info">
                        <div class="release-date">
                            <p><b>Released</b></p>
                            <p>{movieInfo.release_date}</p>
                        </div>
                        <div class="about-movie-rating">
                            <p><b>Rating</b></p>
                            <RatingStars rating={movieInfo.rating} />
                        </div>
                    </div>
                    <hr />
                    <div className="about-synopsis">
                        <p class="synopsis-title">Synopsis</p>
                        <p>{movieInfo.description}</p>
                    </div>
                    <FavoriteButton movieID={movieInfo.id} />
                </div>
            </div>
        }
        </main>
    )
}

export default SingleMovie;