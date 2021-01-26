import dbLogo from '../images/tmdblogo.svg';

const About = () => {
    return (
        <main>
            <div className="content-box">
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
                        <a href="https://www.themoviedb.org/"><img src={dbLogo} class="dblogo" alt="the movie database logo"/></a>
                    </div>
                    <br></br>
                    <div className='app-team'>
                        <h3>The Team</h3>
                        <p>
                            Watcher is a React JS project created by <a href="https://mhildebrand.bcitwebdeveloper.ca">Matt </a>
                            and <a href="https://skyeyang.bcitwebdeveloper.ca">Skye</a>, who are both currently enrolled in BCIT's 
                            Technical Web Developer program and studying to become web developers.</p>
                        <p>
                            May their shattered spirits recover from this endeavour. 
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;