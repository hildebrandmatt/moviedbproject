import { NavLink } from 'react-router-dom';
import home from '../images/homeButtonRed.png';
import about from '../images/aboutButtonRed.png';
import favourite from '../images/favouriteButtonRed.png';
//import search from '../images/searchButtonRed.png';

const Nav = ({ hideNav }) => (
	<nav onClick={hideNav}>
        <ul>
            <li><NavLink to={'/'} exact><img src={ home } /><p>Home</p></NavLink></li>
            <li><NavLink to={'/about'}><img src={ about } /><p>About</p></NavLink></li>
            <li><NavLink to={'/favourites'}><img src={ favourite } /><p>Favourites</p></NavLink></li>
        </ul>
	</nav>    
);

export default Nav;