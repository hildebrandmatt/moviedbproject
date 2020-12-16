import { NavLink } from 'react-router-dom';

const Nav = ({ hideNav }) => (
	<nav onClick={hideNav}>
        <ul>
            <li><NavLink to={'/'} exact>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
        </ul>
	</nav>    
);

export default Nav;