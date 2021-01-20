import { NavLink } from 'react-router-dom';

const PageSelector = props => {

    const pages = []
    console.log(props.pageNumber)

    var i = props.pageNumber - 10
    if (i < 1) {
        i = 1
    }
    var max = props.pageNumber + 10
    var prev = props.pageNumber - 1
    if (prev < 1) {
        prev = 1
    }
    const next = props.pageNumber + 1
    const currentPage = props.pageNumber

    for (i; i < max; i++ ) {
        pages.push(<li><NavLink to={'/page/' + i } exact><div class="page-link"><p>{i}</p></div></NavLink></li>)
    }

    return (
        <nav class="page-selector">
            <ul>
                <li><NavLink to={'/page/' + prev } exact><div class="page-link"><p>Previous</p></div></NavLink></li>
                {pages}
                <li><NavLink to={'/page/' + next } exact><div class="page-link"><p>Next</p></div></NavLink></li>
            </ul>
        </nav>
    )
};

export default PageSelector;