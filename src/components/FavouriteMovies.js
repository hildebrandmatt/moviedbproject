import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processSingleMovie } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import RatingStars from './RatingStars';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import missingPoster from '../images/placeholderPoster.PNG'

const FavouriteMovies = props => {

    const [movieArray, setMovieArray] = useState([])
    var tempArray = []
    var favArray = []

    useEffect(() => {
        tempArray = JSON.parse(localStorage.getItem('favorites'))
        if ( !tempArray ) {
            tempArray = []
        } else {
            fetchMovie()
        }
    }, [props.reset])

    const fetchMovie = async (id) => {
        for( let i = 0; i < tempArray.length; i++) {
            const res = await fetch(`${TMDB_BASE_URL}${tempArray[i]}${TMDB_API_KEY}&language=en-US`)
            let data = await res.json()
            let processedData = await processSingleMovie(data)
            favArray.push(processedData)
        }
        setMovieArray(favArray)
    }


    return (
        <div>
            { movieArray &&
                movieArray.length === 0 ?
            <div className="no-favourites">
                <div className="content-box fave-content-box">
                    <p>Oh no! Looks like you have no favourites. Add movies to your
                        favourites by clicking the <img src={unfavoriteButton} className="no-favorites-favorite-button" alt="favorite button" aria-label="heart button"></img> on the movie cards.
                    </p>
                </div>
            </div> 

            :

            <div className="favourites-section">
                <div className="movie-gallery">
                    {movieArray.map((movie) => {
                        return (
                            <div className="movie-info-card" key={movie.id}>
                                <div className="poster">
                                    <img src={movie.poster ? "https://image.tmdb.org/t/p/w500" + movie.poster : missingPoster } alt={"Poster for " +  movie.title} />
                                </div>
                                <FavoriteButton movieID={movie.id} />
                                <div className="description">
                                    <div className="hover-info">
                                        <p>{movie.description}</p>
                                        <NavLink to={ "/single-movie/" + movie.id } exact><button className="more-info-btn">More info</button></NavLink>
                                    </div>
                                    <div className="quick-intro">
                                        <div className="poster-title">
                                            <p className="poster-intro-title">{movie.title}</p>
                                            <p className="poster-intro-date">{movie.release_date}</p>
                                            <RatingStars rating={movie.rating} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div> }
        </div>
    )
}

export default FavouriteMovies;