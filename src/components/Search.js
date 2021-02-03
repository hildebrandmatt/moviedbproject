import { NavLink } from 'react-router-dom';
import search from '../images/searchButtonRed.png';



window.onload = function(){ 
    document.getElementById("search-icon").onclick = function() {
        showSearch()
    };


    function showSearch() {
        document.getElementById("search-bar").classList.toggle("show");
        document.getElementById("li-id1").classList.toggle("hide");
        document.getElementById("li-id2").classList.toggle("hide");
        document.getElementById("li-id3").classList.toggle("hide");
        document.getElementById("home-logo").classList.toggle("hide");
      
    }
}


const Search = () => {
    return(
    <div id="search-bar-container">
        <input type="text" placeholder="Search..." id="search-bar"/>
        <img src={ search } id="search-icon" />
    </div>
    );
}
export default Search;