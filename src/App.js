import React from 'react';
import './App.css';
import Project from './components/project/Project';

function App() {
  return (
    <div className="App">
      <div className="bio">
        <img className="professional-photo" src="./images/professional-photo.jpg" alt="avatar" />
        <h1 className="name">Yuvraj Manoo</h1>
        <h1 className="job-title">Full-Stack Web Developer</h1>
        <section className="what-i-do">
          <h2>What I Do:</h2>
          <p>
            I build web applications using a variety of technologies such as HTML, CSS, JavaScript,
            Ruby On Rails, and React Redux.
          </p>
        </section>
      </div>
      <div className="project-menu">
        <h1>Projects</h1>
        <div className="project-row">
          <Project
            coverImg="./images/todolist.png"
            title="Todo List App"
            desc="A JavaScript app that allows
          users to add tasks to a to-do list, edit existing tasks, mark tasks as completed,
          and delete existing tasks."
            link="https://github.com/YuvrajM108/js-to-do-list"
          />
          <Project
            coverImg="./images/groups-index-screenshot.png"
            title="University Project Time Tracker"
            desc="A Ruby On Rails app that allows a user to keep track of the hours that
          they have spent on specific projects at their university. It also allows them
          to group these projects by subject."
            link="https://github.com/YuvrajM108/group-transactions-capstone"
          />
        </div>
        <div className="project-row">
          <Project
            coverImg="./images/carbon-intensity-home-screenshot.png"
            title="Carbon Intensity Tracker"
            desc="A simple React application that fetches and displays data about the carbon
          intensity of the various districts in Great Britain."
            link="https://github.com/YuvrajM108/carbon-intensity-app-capstone"
          />
          <Project
            coverImg="./images/car-reservations.png"
            title="Car Reservation Website"
            desc="A web application with a React front end and a Rails API back end that allows the user to
          add cars to the catalogue, delete cars, and reserve cars."
            link="https://github.com/mariordgez/final-capstone-react/"
          />
        </div>
      </div>
      <div className="contact">
        <h1>Contact:</h1>
        <div className="contact-links">
          <a className="contact-link" href="https://www.linkedin.com/in/yuvraj-manoo">
            <img className="contact-logo" alt="linkedin-logo" src="./images/linkedin-logo.png" />
            <p>via LinkedIn</p>
          </a>
          <a className="contact-link" href="https://www.twitter.com/YuvrajM108">
            <img className="contact-logo" alt="twitter-logo" src="./images/twitter-logo.png" />
            <p>via Twitter</p>
          </a>
          <a className="contact-link" href="mailto: yuvrajmanoo1@gmail.com">
            <img className="contact-logo" alt="email-logo" src="./images/email-logo.png" />
            <p>via Email</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
