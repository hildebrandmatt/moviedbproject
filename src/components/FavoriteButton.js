import favoriteButton from '../images/favouriteButtonRed.png';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import { useEffect, useState } from 'react';

const FavoriteButton = props => {

    const [ favorite, setFavorite ] = useState(false)

    useEffect(() => {
        let tempArray = JSON.parse(localStorage.getItem('favorites'))
        if ( !tempArray ) {
            tempArray = []
        }
        var i
        setFavorite(false)
        for (i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === props.movieID) {
                setFavorite(true)
            }
        }
    }, [props.movieID])

    const addFav = props => {
        let tempArray = JSON.parse(localStorage.getItem('favorites'))
        if ( !tempArray ) {
            tempArray = []
        }
        var exists = false
        var i  
        for (i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === props.movieID) {
                exists = true
                var index = i
            }
        }
        if (!exists) {
            tempArray.push(props.movieID)
            setFavorite(true)
        } else {
            tempArray.splice(index, 1)
            setFavorite(false)
        }
        localStorage.setItem('favorites', JSON.stringify(tempArray))
    }

    const movieID = props.movieID
    
    return (
        <div>
            <button className="poster-fave-button"
                    onClick={() => addFav({ movieID })}
                    onMouseDown={ (e) => { e.preventDefault(); }}>
                {favorite ? (
                    <img    className="favorite-button"
                            src={favoriteButton}
                            alt="Favorited movie icon" />
                ) : (
                    <img    className="favorite-button"
                            src={unfavoriteButton}
                            alt="Not favorited movie icon" />
                )}
            </button>
        </div>
    )
}

export default FavoriteButton;