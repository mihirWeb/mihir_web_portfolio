import "./App.css";
import Navbar from "./navbar";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import TimelineLite from "gsap/TimelineLite";

function App() {


  
  // const navAni = useRef(null);
  const helloAni = useRef(null);
  const containerAni = useRef(null);
  const aboutMe = useRef(null);

  

  useEffect(() => {

    const timeline = gsap.timeline();
    
    // gsap
    // .set(navAni.current, { opacity: 0, y: -50 })
    // gsap.to(navAni.current, {
    //   duration: 1,
    //   opacity: 1,
    //   y: 0,
    //   ease: "power3.out"
    // })
    gsap.set(helloAni.current, {opacity: 0})
    gsap.to(helloAni.current, {duration:1, opacity: 0.2, ease: 'linear'});

    gsap.to(containerAni.current, {duration: 0, css: {visibility: "visible"}});

    timeline.set(aboutMe.current, {opacity: 0, y: 100})
    .to(aboutMe.current, {duration: 1, opacity: 0.2,y: 0, ease: 'power3.inOut'})
  }, [helloAni]);

  return (
    <div className="container" ref={containerAni}>
      <section className="home">
        <div className="nav-ani-div" >
          <Navbar />
        </div>

        <div className="home-heading">
          <h1 className="home-heading-bg" ref={helloAni}>
            Hello.
          </h1>
          <p>Scroll to Explore</p>
        </div>

        <p className="scroll-text">Scroll</p>
        <div className="scroll">
          <div className="scroll-line1"></div>
        </div>
      </section>

      <section className="about-me">
        <h1 className="about-me-bg" ref={aboutMe}>Who am I?</h1>
        <div className="about-me-div">
          <div className="my-pic"></div>
          <div className="about-me-content">
            <p>
              <h3>"Me, Myself and I"</h3>
              Greetings, fellow human or possibly a cat who stumbled upon my
              website! I'm Mihir Pratap Singh , your friendly neighborhood web
              developer. I'm not entirely sure what I want to conquer in the
              vast realm of the future. But hey, life is like trying to click
              that elusive bug in your code; you never know what will happen
              next! One thing's for sure: I've been tinkering in the magical
              world of web development for a solid year, and it's been a
              thrilling ride so far. When I'm not turning caffeine into code or
              debugging the mysteries of the universe, I indulge in a diverse
              range of hobbies. From collecting and creating wit memes to
              cooking impossible scenerios in my mind. As an undergrad engineer,
              my college life bestowed upon me the art of time management and
              getting "shit" done before deadline. So, if you're in search of a
              web developer who can inject a healthy dose of whimsy into your
              online presence in a classy way, you've come to the right place.
              Let's team up, embrace the unpredictable, and build something
              extraordinary together!
              <br />
              <br />
              Feel free to explore my portfolio and contact me if you have any
              questions, projects, or just want to chat about life, the
              universe, and everything else.
            </p>
          </div>
        </div>
      </section>

      <section className="project">
        <h1 className="about-me-bg">Projects!</h1>
        <div className="about-me-div project-div">
          <div className="project-title">
            <h1>
              <span>1 of 3</span>
              <br />
              BLOTIC<p>Website, Marketing</p>
            </h1>
          </div>
          <div className="about-me-content project-content">
            {/* <p>
          <h3>"My handicrafts"</h3>
          
          </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
