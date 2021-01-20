import FavoriteMovies from '../components/FavouriteMovies';
import { useState, useEffect } from 'react';

const Favourites = () => {

    const [pageReset, setPageReset] = useState(false)

    useEffect(() => {
    }, [pageReset])
  
    function refreshPage() {
        if (pageReset) {
            setPageReset(false)
        } else {
            setPageReset(true)
        }
    }

    return (
        <main onClick={refreshPage}>
            <div className="page-title favourites-title">
                <h1 class="title-red">Favourite&nbsp;</h1> <h1 class="title-white">Movies</h1>
            </div>
            <FavoriteMovies reset={pageReset} />
        </main>
    )
}

export default Favourites;