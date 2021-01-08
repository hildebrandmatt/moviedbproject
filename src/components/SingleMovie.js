import poster from '../images/dummyImages/tenet.jpg';

const SingleMovie = () => {
    return (
        <main>
            <div class="about-movie-box">
                <img src={poster} class="about-movie-poster"/>
                <h1 class="about-movie-title">movie title</h1>
                <div class="about-movie-quick-info">
                    <div class="release-date">
                        <p><b>Released</b></p>
                        <p>december 14, 2020</p>
                    </div>
                    <div class="about-movie-rating">
                        <p><b>Rating</b></p>
                        <p>placeholder rating stars here</p>
                    </div>
                </div>
                <hr />
                <p><b>synopsis</b></p>
                <p>movie synopsis/description goes here.</p>
                <button class="about-fave-button">nya</button>
            </div>
            
        </main>
    )
}

export default SingleMovie;