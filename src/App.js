import React from 'react';
import './App.css';
import Project from './components/project/Project';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bio" id="bio">
        <img className="professional-photo" src="./images/professional-photo.jpg" alt="avatar" />
        <a href="https://github.com/YuvrajM108" className="name-link"><h1 className="name">Yuvraj Manoo</h1></a>
        <h1 className="job-title">Full-Stack Web Developer</h1>
        <section className="what-i-do">
          <h2>What I Do:</h2>
          <p className="what-i-do">
            I build dynamic web applications using a variety of front-end and back-end technologies
            such as
            <span className="html"> HTML</span>
            ,
            <span className="css"> CSS</span>
            ,
            <span className="js"> JavaScript</span>
            ,
            <span className="ror"> Ruby On Rails</span>
            ,
            and
            <span className="rr"> React Redux</span>
            .
          </p>
        </section>
      </div>
      <div className="project-menu" id="projects">
        <h1 className="projects-heading">Projects</h1>
        <div className="project-row">
          <Project
            coverImg="./images/todolist.png"
            langImgOne="./images/js-logo.png"
            langOneTitle="JavaScript"
            title="Todo List App"
            desc="A JavaScript app that allows
          users to add tasks to a to-do list, edit existing tasks, mark tasks as completed,
          delete all completed tasks, and delete individual tasks."
            link="https://github.com/YuvrajM108/js-to-do-list"
            liveDemo="https://yuvrajm108.github.io/js-to-do-list/index.html"
          />
          <Project
            coverImg="./images/groups-index-screenshot.png"
            langImgOne="./images/ror-logo.png"
            langOneTitle="Ruby On Rails"
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
            langImgOne="./images/react-logo.png"
            langOneTitle="React-Redux"
            title="Carbon Intensity Tracker"
            desc="A simple React application that fetches and displays data about the carbon
          intensity of the various districts in Great Britain."
            link="https://github.com/YuvrajM108/carbon-intensity-app-capstone"
            liveDemo="https://adoring-pasteur-94aa51.netlify.app/"
          />
          <Project
            coverImg="./images/math-magicians-screenshot.png"
            langImgOne="./images/react-logo.png"
            langOneTitle="React-Redux"
            title="Math Magicians"
            desc="A single page web application built in React that allows the user to
          use a calculator and read quotes about mathematics."
            link="https://github.com/YuvrajM108/math-magicians"
            liveDemo="https://hungry-mcnulty-b1cbdd.netlify.app/"
          />
        </div>
      </div>
      <div className="contact" id="contact">
        <h1 className="contact-heading">Contact:</h1>
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
