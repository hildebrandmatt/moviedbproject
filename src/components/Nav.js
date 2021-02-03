import { NavLink } from 'react-router-dom';
import home from '../images/homeButtonRed.png';
import about from '../images/aboutButtonRed.png';
import favourite from '../images/favouriteButtonRed.png';
import FakeNavLink from '../components/FakeNavLink';

const Nav = ({ hideNav }) => (
	<nav onClick={hideNav} id="nav-id">
        <ul>
            <li id="li-id1"><FakeNavLink to={'/watcher/page/1'} exact><img src={ home } alt="Home button" /><p>Home</p></FakeNavLink></li>
            <li id="li-id2"><NavLink to={'/about'}><img src={ about } alt="About button" /><p>About</p></NavLink></li>
            <li id="li-id3"><NavLink to={'/favourites'}><img src={ favourite } alt="Favorites button" /><p>Favourites</p></NavLink></li>
        </ul>
	</nav>    
);

export default Nav;