import { NavLink } from 'react-router-dom';

const PageSelector = props => {

    
    const pages = []

    var i = props.pageNumber - 4
    if (i < 1) {
        i = 1
    }
    var max = i + 9
    var prev = props.pageNumber - 1
    if (prev < 1) {
        prev = 1
    }
    const next = props.pageNumber + 1

    for (i; i < max; i++ ) {
        if(i === props.pageNumber){
            pages.push(<li id="current-page-selector" key={i}><NavLink to={'/page/' + i } exact><div className="page-link" id="current-page"><p>{i}</p></div></NavLink></li>)
        } else if ( ( props.pageNumber < 4 && i > 5 ) ||
                    ( props.pageNumber === 4 && i > 7 ) ){
                        pages.push(<li className="hide-on-mobile" key={i}><NavLink to={'/page/' + i } exact><div className="page-link"><p>{i}</p></div></NavLink></li>)
        } else {
            pages.push(<li key={i}><NavLink to={'/page/' + i } exact><div className="page-link"><p>{i}</p></div></NavLink></li>)
        }
    }

    return (
        <nav className="page-selector">
            <NavLink to={'/page/' + prev } exact><div className="page-link" id="button-previous"><p>Previous</p></div></NavLink>
            <ul>
            {pages}
            </ul>
            <NavLink to={'/page/' + next } exact><div className="page-link" id="button-next"><p>Next</p></div></NavLink>
        </nav>
    )
};

export default PageSelector;