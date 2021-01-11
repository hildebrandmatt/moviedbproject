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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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
                                    <p class="poster-intro-title">placeholder movie title</p>
                                    <p class="poster-intro-date">placeholder release date</p>
                                    <p class="poster-intro-rating">placeholder rating stars</p>
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