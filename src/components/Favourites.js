import FavoriteMovies from '../components/FavouriteMovies';

const Favourites = () => {

    return (
        <main>
            <div className="page-title favourites-title">
                <h1 class="title-red">Favourite&nbsp;</h1> <h1 class="title-white">Movies</h1>
            </div>
            <FavoriteMovies />
        </main>
    )
}

export default Favourites;