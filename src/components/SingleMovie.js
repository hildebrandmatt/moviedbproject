import poster from '../images/dummyImages/tenet.jpg';

const SingleMovie = () => {
    return (
        <main>
            <div className="about-movie-poster-and-title">
                <div className="about-movie-poster-box">
                    <img src={poster} class="about-movie-poster"/>
                </div>
                <h3 class="about-movie-title">movie title</h3>
            </div>
            <div class="about-movie-box">
                <div class="about-movie-quick-info">
                    <div class="release-date">
                        <p><b>Released</b></p>
                        <p>december 14, 2020</p>
                    </div>
                    <div class="about-movie-rating">
                        <p><b>Rating</b></p>
                        <p>**********</p>
                    </div>
                </div>
                <hr />
                <div className="about-synopsis">
                    <p class="synopsis-title">Synopsis</p>
                    <p>movie synopsis/description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button class="about-fave-button">nya</button>
            </div>
            
        </main>
    )
}

export default SingleMovie;