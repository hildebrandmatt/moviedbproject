import poster from '../images/dummyImages/tenet.jpg';
import MovieDatabase from '../components/MovieDatabase';

const Home = () => {
    return (
        <main>
            <div class="home-section">
                <div class="home-bar">
                    <div className="page-title">
                        <h1 class="title-red">All&nbsp;</h1> <h1 class="title-white">Movies</h1>
                    </div>
                    <form>
                        <label for="selected-category">Display by: &nbsp; </label>
                        <select name="selected-category" id="selected-category" class="selected-category">
                            <option value="popular">Popular</option>
                            <option value="now-playing">Now Playing</option>
                            <option value="top-rated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </form>
                </div>
                <MovieDatabase />

            </div>
        </main>
    )
}

export default Home;