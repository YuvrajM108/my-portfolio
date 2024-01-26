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
        <a
          title="Visit my GitHub profile!"
          href="https://github.com/YuvrajM108"
          className="name-link"
        >
          <h1 className="name">Yuvraj Manoo</h1>
        </a>
        <h1 className="job-title">Full-Stack Web Developer</h1>
        <section className="what-i-do">
          <h2>What I Do:</h2>
          <p className="what-i-do">
            I am a front-end oriented full-stack developer who builds dynamic web applications
            using a variety of technologies such as
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
            With over one year of professional experience in web development, I have worked on
            dozens of projects both individually and in collaboration with other developers.
            Some of my best projects can be seen below.
          </p>
        </section>
      </div>
      <div className="project-menu" id="projects">
        <div className="projects-headings">
          <h1 className="projects-heading">Projects</h1>
          <h3 className="preview-note">Hover the cursor over a project to preview its live demo
          or click the live demo link to try it for yourself!</h3>
        </div>
        <div className="project-row">
          <Project
            coverImg="./images/todo-list-screenshot.png"
            langImgOne="./images/js-logo.png"
            langOneTitle="JavaScript"
            title="Todo List App"
            desc="A JavaScript app that allows
          users to add tasks to a to-do list, edit existing tasks, mark tasks as completed,
          delete all completed tasks, and delete individual tasks."
            link="https://github.com/YuvrajM108/js-to-do-list"
            liveDemo="https://yuvrajm108.github.io/js-to-do-list/index.html"
            previewGif="./images/todo-list-preview.gif"
          />
          <Project
            coverImg="./images/groups-index-screenshot.png"
            langImgOne="./images/ror-logo.png"
            langOneTitle="Ruby On Rails"
            title="University Project Time Tracker"
            desc="A Ruby On Rails app that allows a student user to keep track of the hours that
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
            previewGif="./images/carbon-intensity-tracker-preview.gif"
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
            previewGif="./images/math-magicians-preview.gif"
          />
        </div>
      </div>
      <div className="contact" id="contact">
        <h1 className="contact-heading">Contact:</h1>
        <h3 className="preview-note">Get in touch and let&apos;s work together!</h3>
        <div className="contact-links">
          <a className="contact-link" href="https://www.linkedin.com/in/yuvraj-manoo">
            <img className="contact-logo" alt="linkedin-logo" src="./images/linkedin-logo.png" />
            <p className="contact-text">via LinkedIn</p>
          </a>
          <a className="contact-link" href="https://www.twitter.com/YuvrajM108">
            <img className="contact-logo" alt="twitter-logo" src="./images/x-logo.png" />
            <p className="contact-text">via X (Twitter)</p>
          </a>
          <a className="contact-link" href="mailto: yuvrajmanoo1@gmail.com">
            <img className="contact-logo" alt="email-logo" src="./images/email-logo.png" />
            <p className="contact-text">via Email</p>
          </a>
          <p className="copyright">© 2024 Yuvraj Manoo</p>
        </div>
      </div>
    </div>
  );
}

export default App;
