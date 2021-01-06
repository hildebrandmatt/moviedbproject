import { useState, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import logo from '../images/logoRed.png';
import Search from './Search';

const Header = () => {

	const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }

    const hideNav = () => {
        setNavOpen(false);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 600px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);

    return (
        <header>
            <img src={ logo } class="logo-image" />
            <Nav hideNav={hideNav} class="logo-image" />
            <Search />
        </header>
    )
}

export default Header;