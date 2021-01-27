import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processSingleMovie } from '../utilities/movieProcessor';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';
import missingPoster from '../images/placeholderPoster.PNG'

const SingleMovie = () => {

    //const id = window.location.pathname.substring(14)
    
    const { id } = useParams();

    const [movieInfo, setMovieInfo] = useState(null)

    

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`${TMDB_BASE_URL}${id}${TMDB_API_KEY}&language=en-US`)
            let data = await res.json()
            let processedData = await processSingleMovie(data)
            setMovieInfo(processedData)
        }
        fetchMovie()
    }, [id])

    return (
        <main>
        {movieInfo &&
            <div className="single-movie-content">
                <div className="about-movie-poster-and-title">
                    <div className="about-movie-poster-box">
                    <img src={movieInfo.poster ? "https://image.tmdb.org/t/p/w500" + movieInfo.poster : missingPoster } alt={"Poster for " +  movieInfo.title} className="about-movie-poster" />
                    </div>
                </div>
                <h3 className="about-movie-title">{movieInfo.title}</h3>
                <div className="about-movie-box">
                    <div className="about-movie-quick-info">
                        <div className="release-date">
                            <p><b>Released</b></p>
                            <p>{movieInfo.release_date}</p>
                        </div>
                        <div className="about-movie-rating">
                            <p><b>Rating</b></p>
                            <p className="sr-only">{movieInfo.rating} out of 10.</p>
                            <RatingStars rating={movieInfo.rating} />
                        </div>
                    </div>
                    <hr />
                    <div className="about-synopsis">
                        <p className="synopsis-title">Synopsis</p>
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