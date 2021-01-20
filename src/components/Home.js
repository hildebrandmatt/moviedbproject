import MovieDatabase from '../components/MovieDatabase';
import { useEffect, useState } from 'react';
import PageSelector from '../components/PageSelector';

const Home = () => {

    const [sortorder, setSortorder] = useState("popular")
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        if(parseInt(window.location.pathname.substring(6))) {
            setPageNumber(parseInt(window.location.pathname.substring(6)))
        }
        console.log(pageNumber)
    }, [])

    const handleChange = (e) => {
        setSortorder(e.target.value)
    }

    const pageChange = () => {
        console.log(parseInt(window.location.pathname.substring(6)))
        if(parseInt(window.location.pathname.substring(6))) {
            setPageNumber(parseInt(window.location.pathname.substring(6)))
        } else {
            setPageNumber(1)
        }
        console.log(pageNumber)
    }

    return (
        <main>
            <div class="home-section">
                <div class="home-bar">
                    <div className="page-title">
                        <h1 class="title-red">All&nbsp;</h1> <h1 class="title-white">Movies</h1>
                    </div>
                    <form>
                        <label for="selected-category">Display by: &nbsp; </label>
                        <select name="selected-category" id="selected-category" class="selected-category" onChange={handleChange}>
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
            <div onClick={pageChange}>
                <PageSelector pageNumber={pageNumber} />
            </div>
        </main>
    )
}

export default Home;