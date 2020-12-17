import poster from '../images/dummyImages/tenet.jpg';

const Home = () => {
    return (
        <main>
            <div class="home-section">
                <div class="home-bar">
                    <h1>All Movies</h1>
                    <form>
                        <label for="selected-category">Display by:</label>
                        <select name="selected-category" id="selected-category" class="selected-category">
                            <option value="popular">Popular</option>
                            <option value="now-playing">Now Playing</option>
                            <option value="top-rated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </form>
                </div>
                <div class="movie-gallery">

                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={poster} />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>placeholder movie info here, to be seen on hover</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <h1>placeholder movie title</h1>
                                    <h3>placeholder release date</h3>
                                    <p>placeholder rating stars</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={poster} />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>placeholder movie info here, to be seen on hover</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <h1>placeholder movie title</h1>
                                    <h3>placeholder release date</h3>
                                    <p>placeholder rating stars</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={poster} />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>placeholder movie info here, to be seen on hover</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <h1>placeholder movie title</h1>
                                    <h3>placeholder release date</h3>
                                    <p>placeholder rating stars</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={poster} />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>placeholder movie info here, to be seen on hover</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <h1>placeholder movie title</h1>
                                    <h3>placeholder release date</h3>
                                    <p>placeholder rating stars</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={poster} />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>placeholder movie info here, to be seen on hover</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <h1>placeholder movie title</h1>
                                    <h3>placeholder release date</h3>
                                    <p>placeholder rating stars</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="movie-info-card">
                        <div class="poster">
                            <img src={poster} />
                        </div>
                        <div class="description">
                            <div class="hover-info">
                                <button class="poster-fave-button">heart</button>
                                <p>placeholder movie info here, to be seen on hover</p>
                                <button class="more-info-btn">More info</button>
                            </div>
                            <div class="quick-intro">
                                <div class="poster-title">
                                    <h1>placeholder movie title</h1>
                                    <h3>placeholder release date</h3>
                                    <p>placeholder rating stars</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </main>
    )
}

export default Home;