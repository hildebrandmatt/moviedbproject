import { NavLink } from 'react-router-dom';
import home from '../images/homeButtonRed.png';
import about from '../images/aboutButtonRed.png';
import favourite from '../images/favouriteButtonRed.png';
import FakeNavLink from '../components/FakeNavLink';

const Nav = ({ hideNav }) => (
	<nav onClick={hideNav}>
        <ul>
            <li><FakeNavLink to={'/'} exact><img src={ home } alt="Home button" /><p>Home</p></FakeNavLink></li>
            <li><NavLink to={'/about'}><img src={ about } alt="About button" /><p>About</p></NavLink></li>
            <li><NavLink to={'/favourites'}><img src={ favourite } alt="Favorites button" /><p>Favourites</p></NavLink></li>
        </ul>
	</nav>    
);

export default Nav;