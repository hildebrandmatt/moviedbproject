import favoriteButton from '../images/favouriteButtonRed.png';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import { useEffect, useState } from 'react';

const FavoriteButton = props => {

    const [ favorites, setFavorites ] = useState([])

    const addFav = (props: any) => {

        localStorage.setItem("favorites", JSON.stringify(favorites));

        var storage = localStorage.getItem('favMovie' + (props.movieID) || '0')
        if (storage == null) {
            localStorage.setItem(('favMovie' + (props.movieID)), JSON.stringify(props.items));
        } else {
            localStorage.removeItem('favMovie' + (props.movieID));
        }
        setFavorites()
    }

    const movieID = props.movieID
    
    return (
        <div>
            {localStorage.getItem('favMovie' + movieID) ? (
                <img    class="favorite-button"
                        src={favoriteButton}
                        onClick={() => addFav({ movieID })} />
            ) : (
                <img    class="favorite-button"
                        src={unfavoriteButton}
                        onClick={() => addFav({ movieID })} />
            )}
        </div>
    )
}

export default FavoriteButton;