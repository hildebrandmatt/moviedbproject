import poster from '../images/dummyImages/tenet.jpg';

const Favourites = () => {
    return (
        <main>
            <div className="page-title favourites-title">
                <h1 class="title-red">Favourite&nbsp;</h1> <h1 class="title-white">Movies</h1>
            </div>
            <div class="no-favourites">
                <div class="content-box">
                    <p>Oh no! Looks like you have no favourites. Add movies to your
                        favourites by clicking the [heart] on the movie cards.
                    </p>
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

export default Favourites;