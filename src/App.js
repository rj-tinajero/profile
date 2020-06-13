import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import headshot from './assets/profile_headshot.jpg'
import linkedin from './assets/icon-linkedin.svg'
import github from './assets/icon-github.svg'
import background from './assets/background.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h3 className="">Hi, my name is Richard Tinajero.</h3>
        <h3 className="">I'm a Full Stack Developer.</h3>
        <img src={headshot} />

        <h5>ABOUT</h5>
        <p>I reside in sunny Riverside, California. I am skilled in JavaScript and build projects using modern frameworks like React and Node. I have 4 years of 
          4+ years of work experience in operational manufacturing and deployment. I recently took part in a web development
          certification program run by Bloc. There, I built a number of projects and continue to build more to this very day! 
          My passions include mentoring college students, guitar, photography, and programming of course! 
        </p>
        <a 
          className="link_out"
          href="https://github.com/rj-tinajero/profile/blob/master/RichardTinajero_Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my resume
        </a>

        <h5>PROJECTS</h5>
        
        <h5>CONTACT</h5>
        <p>If you'd like to connect, please email me at</p>
        {/* is there a way to make this link to gmail when clicked? whatever email client they use? */}
        <a className="link_out" href="mailto:rj.tinajero92@gmail.com">rj.tinajero92@gmail.com</a>
        
        <a href="https://linkedin.com/in/richard-tinajero" target="_blank"><img src={linkedin} /></a>
        <a href="https://github.com/rj-tinajero" target="_blank"><img src={github} /></a>

      </header>
    </div>
  );
}

{/* <i class="fab fa-linkedin-in"></i>
<i class="fab fa-github"></i> */}
export default App;
