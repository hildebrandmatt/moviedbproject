import { useState, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

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
            <h1>Hello I'm a Header</h1>
            <Nav hideNav={hideNav} />
        </header>
    )
}

export default Header;