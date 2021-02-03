import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_SEARCH_URL } from '../globals/variables';
import { processMovieArray } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';
import missingPoster from '../images/placeholderPoster.PNG'

const SearchPage = () => {

    const [movieArray, setMovieArray] = useState(null)
    
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery().get('query');
    var page = 1

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`${TMDB_SEARCH_URL}${query}&page=${page}&include_adult=false`)
            let data = await res.json()
            let processedData = await processMovieArray(data, 20)
            setMovieArray(processedData)
        }
        fetchMovies()
    }, [query])

    return (
        <main>
            <div className="home-section">
                <div className="home-bar">
                    <div className="page-title">
                        <h1 className="title-red">All&nbsp;</h1> <h1 className="title-white">Movies</h1>
                    </div>
                </div>
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
                                            
                                            <NavLink to={ "/single-movie/" + movie.id } exact><p className="poster-intro-title">{movie.title}</p></NavLink>
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
            </div>
        </main>
    );
}

export default SearchPage;