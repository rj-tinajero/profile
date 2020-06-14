import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import headshot from './assets/profile_headshot.jpg'
import linkedin from './assets/icon-linkedin.svg'
import github from './assets/icon-github.svg'
import background from './assets/background.jpg'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <div >
          <header className="App-header">
            <div className="myBOX">
              <div className="title">
              <h2 className="">Hi, my name is <strong>Richard Tinajero</strong>.</h2>
              <h2 className="">I'm a <strong>Full Stack Developer</strong>.</h2>
            </div>

            <img className="headshot" src={headshot} />
            
            <div>
              <h5>ABOUT</h5>
              <p>I reside in sunny Riverside, California. I am skilled in JavaScript and build projects using modern frameworks like React and Node. I have 
                4+ years of work experience in operational manufacturing and deployment. I recently took part in a web development
                certification program run by Bloc. There, I built a number of projects and continue to build more to this very day! 
                My passions include mentoring college students, guitar, photography, and programming of course! 
              </p>
              <p>This is a new paragragh right here.</p>
              <a 
                style={{fontFamily: "Noto Sans"}}
                className="link_out"
                href="https://github.com/rj-tinajero/profile/blob/master/RichardTinajero_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out my resume
              </a>
            </div>
            

            <h5>PROJECTS</h5>
            <br></br>
            <div className="row">
              <div className="contact col-8">
                <h5>CONTACT</h5>
                <p>Donec id elit non mi porta gravida at eget metus. 
                  Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                <p>If you'd like to connect, please email me at</p>
                
                <a style={{fontFamily: "Noto Sans"}} className="link_out" href="mailto:rj.tinajero92@gmail.com">rj.tinajero92@gmail.com</a>
                
                
              </div>
              <div className="social col-4">
                  <a href="https://linkedin.com/in/richard-tinajero" target="_blank"><img src={linkedin} /></a>
                  <a href="https://github.com/rj-tinajero" target="_blank"><img src={github} /></a>
              </div>
            </div>
            
          </div>
          
          

        </header>
        </div>
      </div>
    </div>
  );
}

{/* <i class="fab fa-linkedin-in"></i>
<i class="fab fa-github"></i> */}
export default App;
