import favoriteButton from '../images/favouriteButtonRed.png';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import { useState, useEffect } from 'react';

const FavoriteButton = () => {

    const [ favorite, setFavorite ] = useState(false)

    const faveClick = () => {
        console.log('this is:', this)
        //console.log(this.getAttribute('src'))
    }
    
    return (
        <div>
            <img    class="favorite-button"
                    onClick={() => setFavorite(prevMode => !prevMode)}
                    src={favorite ? favoriteButton : unfavoriteButton} />
        </div>
    )
}

export default FavoriteButton;