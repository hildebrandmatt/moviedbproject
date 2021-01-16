import favoriteButton from '../images/favouriteButtonRed.png';
import unfavoriteButton from '../images/unfavouriteButtonRed.png';
import { useState } from 'react';

const FavoriteButton = props => {

    const [ favorites, setFavorites ] = useState([])

    const addFav = (props: any) => {
        console.log(favorites)
        let array = favorites;
        console.log(array);
        let addArray = true;
        array.map((item: any, key: number) => {
            if ( item === props.movieID ) {
                array.splice(key, 1);
                addArray = false;
                console.log("hello")
            }
        })
        if (addArray) {
            array.push(props.movieID)
        }
        console.log(array)
        setFavorites([...array])
        console.log(favorites)
        /*let array = favorites;
        let addArray = true;
        array.map((item: any, key: number) => {
            if (item === props.i) {
                array.splice(key, 1);
                addArray = false;
            }
        });
        if (addArray) {
            array.push(props.i);
        }
        setFavorites([...array])*/
    }

    const movieID = props.movieID
    
    return (
        <div>
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