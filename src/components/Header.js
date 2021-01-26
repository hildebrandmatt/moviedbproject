import { useState, useEffect } from 'react';
import Nav from './Nav';
import logo from '../images/logoRed.png';
import FakeNavLink from '../components/FakeNavLink';

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
            <FakeNavLink to={'/'} exact><img src={ logo } className="logo-image" alt="Watcher W logo" /></FakeNavLink>
            <Nav hideNav={hideNav} className="logo-image" />
            <div style={{width: "36px"}}></div>
            {/*<Search />*/}
        </header>
    )
}

export default Header;