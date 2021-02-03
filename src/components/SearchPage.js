import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { TMDB_SEARCH_URL } from '../globals/variables';
import { processMovieArray } from '../utilities/movieProcessor';
import { NavLink } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';
import missingPoster from '../images/placeholderPoster.PNG'

const SearchPage = () => {

    const [movieArray, setMovieArray] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery().get('query');

    useEffect(() => {

        if(query === null || query === ''){
            return;
        }

        const fetchMovies = async () => {
            const res = await fetch(`${TMDB_SEARCH_URL}${query}&page=${pageNumber}&include_adult=false`)
            let data = await res.json()
            let processedData = await processMovieArray(data, data.results.length)
            setMovieArray(processedData)
        }
        fetchMovies()
    }, [query, pageNumber])


    const PageSelector = () => {
    
        const pages = []
    
        var i = pageNumber - 4
        if (i < 1) {
            i = 1
        }
        var max = i + 9
        var prev = pageNumber - 1
        if (prev < 1) {
            prev = 1
        }
        const next = pageNumber + 1
    
        for (i; i < max; i++ ) {
            let y = i
            if(i === pageNumber){
                pages.push(<li id="current-page-selector" key={i}><div className="page-link" id="current-page" onClick={() => pageChange(y)}><p>{i}</p></div></li>)

            } else if ( ( pageNumber < 4 && i > 5 ) ||
                        ( pageNumber === 4 && i > 7 ) ){
                            pages.push(<li className="hide-on-mobile" key={i}><div className="page-link" onClick={() => pageChange(y)}><p>{i}</p></div></li>)
            } else {
                pages.push(<li key={i}><div className="page-link" onClick={() => pageChange(y)}><p>{i}</p></div></li>)
            }
        }
    
        return (
            <nav className="page-selector">
                <div className="page-link" id="button-previous" onClick={() => pageChange(prev)}><p>Previous</p></div>
                <ul>
                {pages}
                </ul>
                <div className="page-link" id="button-next" onClick={() => pageChange(next)}><p>Next</p></div>
            </nav>
        )
    };

    const pageChange = (page) => {
        setPageNumber(page)
    }


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
            <PageSelector />
        </main>
    );
}

export default SearchPage;