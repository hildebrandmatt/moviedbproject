import { useHistory } from 'react-router-dom';
import search from '../images/searchButtonRed.png';



window.onload = function(){ 
    document.getElementById("search-icon").onclick = function() {
        showSearch()
    };


    function showSearch() {
        document.getElementById("search-bar").classList.toggle("show");
        document.getElementById("search-bar-container").classList.toggle("show-bar");
        document.getElementById("li-id1").classList.toggle("hide");
        document.getElementById("li-id2").classList.toggle("hide");
        document.getElementById("li-id3").classList.toggle("hide");
        document.getElementById("home-logo").classList.toggle("hide");
      
    }
}


const Search = () => {

    const history = useHistory();
    
    function liveSearch(e){
        let q = e.target.value

        q = q.trim();
    
        if(q === ''){
          history.push(`/`);
          return;
        }
    
        history.push(`/search?query=${q}`);
    }

    return(
    <div id="search-bar-container">
    <input type="search" placeholder="Search..." id="search-bar" onChange={liveSearch} />
        <img src={ search } id="search-icon" />
    </div>
    );
}
export default Search;