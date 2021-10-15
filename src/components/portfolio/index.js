import React from "react";
import './styles.css'

const Projects = () => {
    return (
        <div class = "parent">
            <div class="card">
                <img src='https://i.imgur.com/eKc9FC0.png' alt="wizard Wipeout" />
                <div class="container">
                    <a href = "https://github.com/Sooova/super-duper-bassoon">
                    <h4><b>Wizard Wipeout</b></h4>
                    <p>Full-stack Application</p>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src='https://i.imgur.com/r9UfSL5.png' alt="Note Taker" />
                <div class="container">
                    <a href = "https://github.com/Sooova/Express-Note-Taker">
                    <h4><b>Express Note Taker</b></h4>
                    <p>Node, Express, Html, Css, Js</p>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src='https://i.imgur.com/oJl0Hz9.png' alt="quiz" />
                <div class="container">
                    <a href = "https://github.com/Sooova/Code-Quiz">
                    <h4><b>Quiz App</b></h4>
                    <p>Html, Css, Js</p>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src='https://i.imgur.com/FC7S1bl.png' alt="Work Scheduluer" />
                <div class="container">
                    <a href = "https://github.com/Sooova/Day-Planner">
                    <h4><b>Work Day Scheduler</b></h4>
                    <p>Html, Css, Js</p>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src='https://i.imgur.com/iIAQoRA.png' alt="Weather Dashboard" />
                <div class="container">
                    <a href = "https://github.com/Sooova/Weather-Dashboard">
                    <h4><b>Weather Dashboard</b></h4>
                    <p>Html, Css, Js</p>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src='https://i.imgur.com/t717JNZ.png' alt="gist" />
                <div class="container">
                    <a href = "https://gist.github.com/Sooova/a45cbc975539379e0015ef9561600165">
                    <h4><b>Regex Gist</b></h4>
                    <p>Github Gist</p>
                    </a>
                </div>
            </div>

        </div>



    )
}

export default Projects;