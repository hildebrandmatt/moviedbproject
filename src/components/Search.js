import { NavLink } from 'react-router-dom';
import search from '../images/searchButtonRed.png';

const Search = () => {
    return(
    <div className="search-bar-container">
        <input type="text" placeholder="Search..." className="search-bar"/>
        <img src={ search } className="search-icon" />
    </div>
    );
}
export default Search;