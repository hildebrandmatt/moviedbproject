import MovieDatabase from '../components/MovieDatabase';
import { useEffect, useState } from 'react';
//import PageSelector from '../components/PageSelector';

const Home = () => {
    

    const [sortorder, setSortorder] = useState("popular")
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        if(!localStorage.getItem('sortorder')) {
            localStorage.setItem('sortorder', 'popular')
        }
        setSortorder(localStorage.getItem('sortorder'))
    }, [pageNumber])

    const handleChange = (e) => {
        setSortorder(e.target.value)
        localStorage.setItem('sortorder', e.target.value)
        setPageNumber(1)
        window.history.replaceState(null, "", "/")
    }

    const PageSelector = () => {
    
        const pages = []
    
        var i = pageNumber - 4
        if (i < 1) {
            i = 1
        }
        var max = i + 9
        var prev = pageNumber - 1
        if (prev < 1) {
            prev = 1
        }
        const next = pageNumber + 1
    
        for (i; i < max; i++ ) {
            let y = i
            if(i === pageNumber){
                pages.push(<li id="current-page-selector" key={i}><div className="page-link" id="current-page" onClick={() => pageChange(y)}><p>{i}</p></div></li>)

            } else if ( ( pageNumber < 4 && i > 5 ) ||
                        ( pageNumber === 4 && i > 7 ) ){
                            pages.push(<li className="hide-on-mobile" key={i}><div className="page-link" onClick={() => pageChange(y)}><p>{i}</p></div></li>)
            } else {
                pages.push(<li key={i}><div className="page-link" onClick={() => pageChange(y)}><p>{i}</p></div></li>)
            }
        }
    
        return (
            <nav className="page-selector">
                <div className="page-link" id="button-previous" onClick={() => pageChange(prev)}><p>Previous</p></div>
                <ul>
                {pages}
                </ul>
                <div className="page-link" id="button-next" onClick={() => pageChange(next)}><p>Next</p></div>
            </nav>
        )
    };

    const pageChange = (page) => {
        setPageNumber(page)
    }

    return (
        <main>
            <div className="home-section">
                <div className="home-bar">
                    <div className="page-title">
                        <h1 className="title-red">All&nbsp;</h1> <h1 className="title-white">Movies</h1>
                    </div>
                    <form>
                        <label htmlFor="selected-category">Display by: &nbsp; </label>
                        <select name="selected-category" id="selected-category" className="selected-category" onChange={handleChange} value={sortorder}>
                            <option value="popular">Popular</option>
                            <option value="now_playing">Now Playing</option>
                            <option value="top_rated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </form>
                </div>
                <MovieDatabase  sortOrder={sortorder}
                                pageNumber={pageNumber} />

            </div>
            <PageSelector />
        </main>
    )
}

export default Home;