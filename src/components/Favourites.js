import poster from '../images/dummyImages/tenet.jpg';

const Favourites = () => {
    return (
        <main>
            <h1>Favourite Movies</h1>
            <div class="no-favourites">
                <div class="content-box">
                    <p>some placeholder about text here, this is where the user is instructed on how to add favourite movies</p>
                </div>
            </div>

            <div class="favourites-secion">
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

export default Favourites;