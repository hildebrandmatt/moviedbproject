import { NavLink } from 'react-router-dom';

const PageSelector = props => {

    const pages = []
    console.log(props.pageNumber)

    var i = props.pageNumber - 10
    if (i < 1) {
        i = 1
    }
    console.log(i)
    var max = props.pageNumber + 10
    console.log(max)

    for (i; i < max; i++ ) {
        pages.push(<li><NavLink to={'/page/' + i } exact><p>{i}</p></NavLink></li>)
    }

    return (
        <nav class="page-selector">
            <ul>
                {pages}
            </ul>
        </nav>
    )    
};

export default PageSelector;