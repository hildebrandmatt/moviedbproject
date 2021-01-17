import favoriteButton from '../images/favouriteButtonRed.png';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import { useEffect, useState } from 'react';

const FavoriteButton = props => {

    const [ favorites, setFavorites ] = useState([])
    const getArray = JSON.parse(localStorage.getItem('favorites') || '0')

    console.log(getArray)
    console.log(favorites)

    useEffect(() => {
        if (getArray !== 0) {
            setFavorites([...getArray])
            console.log("hello")
        }
    }, [])

    const addFav = props => {
        let array = favorites;
        let addArray = true;
        array.map((item: any, key: number) => {
            if (item === props.movieID) {
                array.splice(key, 1);
                addArray = false;
            }
        });
        if ( addArray ) {
            array.push(props.movieID);
        }
        setFavorites([...array])

        localStorage.setItem("favorites", JSON.stringify(favorites));

        var storage = localStorage.getItem('favMovie' + (props.movieID) || '0')
        if (storage == null) {
            localStorage.setItem(('favMovie' + (props.movieID)), JSON.stringify(props.items));
        } else {
            localStorage.removeItem('favMovie' + (props.movieID));
        }
    }

    const movieID = props.movieID
    
    return (
        <div>
            {/*{localStorage.getItem('favMovie' + movieID) ? (*/}
            {favorites.includes(movieID) ? (
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