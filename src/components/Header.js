//import { useState, useEffect } from 'react';
import Nav from './Nav';
import logo from '../images/logoRed.png';
import FakeNavLink from '../components/FakeNavLink';
import Search from './Search';

const Header = () => {

    return (
        <header>
            <FakeNavLink to={'/watcher/page/1'} exact><img src={ logo } className="logo-image" alt="Watcher W logo" id="home-logo" /></FakeNavLink>
            <Nav className="logo-image" />
            <Search />
        </header>
    )
}

export default Header;