import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processSingleMovie } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import RatingStars from './RatingStars';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import missingPoster from '../images/placeholderPoster.PNG'

const FavouriteMovies = props => {

    const [favMovies, setFavMovies] = useState(null);

    const fetchMovie = async (arr) => {
        const favArray = [];
        for( let i = 0; i < arr.length; i++) {
            const res = await fetch(`${TMDB_BASE_URL}${arr[i]}${TMDB_API_KEY}&language=en-US`)
            let data = await res.json()
            let processedData = await processSingleMovie(data)
            favArray.push(processedData)
        }
        setFavMovies(favArray);
    }

    useEffect(() => {
        let tempArray = JSON.parse(localStorage.getItem('favorites'))
        if ( tempArray && Array.isArray(tempArray) && tempArray.length > 0 ) {
            fetchMovie(tempArray)
        } else {
            setFavMovies(null)
        }
        console.log("refresh")
    }, [props.reset])

    return (
        <div>
            { !favMovies ?
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
                    {favMovies.map((movie) => {
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
                                            <NavLink to={ "/single-movie/" + movie.id } exact><p className="poster-intro-title">{movie.title}</p></NavLink>
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