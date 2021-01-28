import MovieDatabase from '../components/MovieDatabase';
import { useEffect, useState } from 'react';
import PageSelector from '../components/PageSelector';

const Home = () => {
    

    const [sortorder, setSortorder] = useState("popular")
    const [pageNumber, setPageNumber] = useState(9)

    useEffect(() => {
        if(parseInt(window.location.pathname.substring(14))) {
            setPageNumber(parseInt(window.location.pathname.substring(14)))
        }
        if(!localStorage.getItem('sortorder')) {
            localStorage.setItem('sortorder', 'popular')
        }
        setSortorder(localStorage.getItem('sortorder'))
    }, [])

    const handleChange = (e) => {
        setSortorder(e.target.value)
        localStorage.setItem('sortorder', e.target.value)
        setPageNumber(9)
        window.history.replaceState(null, "", "/")
    }

    const pageChange = () => {
        if(parseInt(window.location.pathname.substring(14))) {
            setPageNumber(parseInt(window.location.pathname.substring(14)))
        } else {
            setPageNumber(9)
        }
        console.log(window.location.pathname.substring(14))
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
            <div onClick={pageChange} id="page-holder">
                <PageSelector pageNumber={pageNumber} />
            </div>
        </main>
    )
}

export default Home;