import dbLogo from '../images/tmdblogo.svg';

const About = () => {
    return (
        <main>
            <div class="content-box">
                <h1>About</h1>
                <hr />
                <div className="about-app-text">
                    <div className="app-description">
                        <h3>The Project</h3>
                        <p>Watcher is a movie listing app that lets users browse movies based 
                            on popularity, rating, and release date, and keep track of movies 
                            they love.
                        </p>
                        <p>
                            This product uses the TMDb API but is not endorsed or certified by TMDb.
                        </p>
                        <img src={dbLogo} class="dblogo"/>
                    </div>
                    <br></br>
                    <div class='app-team'>
                        <h3>The Team</h3>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;