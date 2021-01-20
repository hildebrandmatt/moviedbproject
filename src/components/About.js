import dbLogo from '../images/tmdblogo.svg';

const About = () => {
    return (
        <main>
            <div class="content-box">
                <h1>About</h1>
                <hr />
                <p>Keep track of your favourite movies with Watcher. Our application allows
                    users to browse through their favourite movies, check their ratings, and
                    add them to their lists. Don't like a movie anymore? Removing it from your
                    favourites is as easy as pressing the heart button on the posters.
                </p>
                <br></br>
                <p>
                This product uses the TMDb API but is not endorsed or certified by TMDb.
                <br></br>
                <br></br>
                <img src={dbLogo} class="dblogo"/>
                </p>
            </div>
            
        </main>
    )
}

export default About;