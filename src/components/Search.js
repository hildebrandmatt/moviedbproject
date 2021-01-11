import { NavLink } from 'react-router-dom';
import search from '../images/searchButtonRed.png';

const Search = () => {
    return(
    <div class="search-bar-container">
        <input type="text" placeholder="Search..." class="search-bar"/>
        <img src={ search } class="search-icon" />
    </div>
    );
}
export default Search;