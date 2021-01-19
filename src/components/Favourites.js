import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';
import { processSingleMovie } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';

const Favourites = () => {

    const [movieArray, setMovieArray] = useState([])

    const allFaves = () => {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        
        while ( i-- ) {
            if( localStorage.key(i).substring(0,8) == "favMovie" ) {
                values.push( localStorage.getItem(keys[i]) );
            }
        }

        return values;
    }
    
    var favArray = allFaves()

    var tempArray = []

    const fetchMovie = async (id) => {
        const res = await fetch(`${TMDB_BASE_URL}${id}${TMDB_API_KEY}&language=en-US`)
        let data = await res.json()
        let processedData = await processSingleMovie(data)
        tempArray.push(processedData)
    }

    useEffect(() => {
        var i;
        for(i = 0; i < favArray.length; i++) {
            fetchMovie(favArray[i])
        }
        console.log(tempArray)
        setMovieArray(tempArray)
        console.log(movieArray)
    }, [])


    return (
        <main>
            <div className="page-title favourites-title">
                <h1 class="title-red">Favourite&nbsp;</h1> <h1 class="title-white">Movies</h1>
            </div>
            {movieArray.length === 0 ?
            <div class="no-favourites">
                <div class="content-box fave-content-box">
                    <p>Oh no! Looks like you have no favourites. Add movies to your
                        favourites by clicking the [heart] on the movie cards.
                    </p>
                </div>
            </div> 

            :

            <div class="favourites-section">
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
                                            <RatingStars rating={movie.rating} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div> }
        </main>
    )
}

export default Favourites;