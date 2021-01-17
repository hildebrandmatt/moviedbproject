import favoriteButton from '../images/favouriteButtonRed.png';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import { useEffect, useState } from 'react';

const FavoriteButton = props => {

    const [ favorite, setFavorite ] = useState(false)
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0')

    useEffect(() => {
        if (localStorage.getItem('favMovie' + (props.movieID))) {
            setFavorite(true)
        }
    }, [])

    const addFav = props => {

        console.log(props.movieID)

        var storage = localStorage.getItem('favMovie' + (props.movieID) || '0')
        if (storage == null) {
            localStorage.setItem(('favMovie' + (props.movieID)), JSON.stringify(props.items));
            setFavorite(true)
        } else {
            localStorage.removeItem('favMovie' + (props.movieID));
            setFavorite(false)
        }
    }

    const movieID = props.movieID
    
    return (
        <div>
            {favorite ? (
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