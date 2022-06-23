import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const sidebar = useRef(null);
  const button = useRef(null);
  const mainContainer = useRef(null);

  // handle sidebar
  const handleSidebar = (status) => {
    if (typeof status == "boolean") {
      if (status) {
        sidebar.current.classList.remove("active");
        button.current.style.left = "300px";
        mainContainer.current.style.marginLeft = "300px";
      } else {
        sidebar.current.classList.add("active");
        button.current.style.left = "0px";
        mainContainer.current.style.marginLeft = "0px";
      }
      return;
    }

    if (sidebar.current.classList.contains("active")) {
      sidebar.current.classList.remove("active");
      button.current.style.left = "300px";
      mainContainer.current.style.marginLeft = "300px";
    } else {
      sidebar.current.classList.add("active");
      button.current.style.left = "0px";
      mainContainer.current.style.marginLeft = "initial";
    }
  };

  // sidebar resize
  useEffect(() => {
    function checkSidebar() {
      if (window.screen.width > 786) {
        handleSidebar(true);
      } else {
        handleSidebar(false);
      }
    }
    checkSidebar();

    window.addEventListener("resize", function (event) {
      checkSidebar();
    });
  }, []);

  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  return (
    <div className="container-fluid ">
      {/* sidebar button  */}
      <button
        className="navbar-button btn btn-primary"
        ref={button}
        onClick={handleSidebar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* sidebar  */}
      <div className="sidebar  border active" ref={sidebar}>
        <div className="sidebar__top ">
          <div className="sidebar__top_img_wrap">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/production-portfolio-9a395.appspot.com/o/29249326_548922835491216_4695470664184758272_n.webp?alt=media&token=d3a53c04-3d68-41bd-b3a8-3e390121e8ac"
              className="img-fluid sidebar__img"
              alt=""
            />
          </div>
        </div>
        <hr className="border border-dark" />
        <div className="sidebar__middle ">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="border border-dark" />
        <div className="sidebar__bottom mb-3 fw-bolder">
          &copy;Copyright 2022. All Rights reserved
        </div>
      </div>

      {/* main content */}
      <div className="content " ref={mainContainer}>
        {/* home  */}
        <div className="home" id="home">
          <div className="text-center">
            <h2 className=" fw-bold fs-1">
              My name is <span className="text-primary">Sadman Sakib</span>
            </h2>
            <p className="fs-4  text-secondary">
              I am a full stack web developer
            </p>
          </div>
        </div>

        {/* resume  */}
        <div className="resume" id="resume">
          <h2>Resume</h2>
          <hr />
          <p>Hi, My name is Sadman Sakib. I am a full stack web developer.</p>

          <p>
            I am looking for Intern/Junior Job(remote). I am still learning web
            development & I want to take my career to next level & improve my
            skills with the Junior position jobs/internship.
          </p>

          <div>
            Some of my skills are:
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Bootstrap</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>React</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <p>Please hire me If you like my portfolio</p>
          <p className="fw-bold">
            [ Note: I didn't used any fancy css animations because most of the
            time HR avoid such website ]
          </p>
        </div>

        {/* portfolio  */}
        <div className="portfolio mt-5" id="portfolio">
          <h2>Portfolio</h2>
          <div className="container">
            <div className="row">
              <Portfolio
                image="./mern-todo-app.png"
                name="React Todo App"
                projectUrl="https://mern-todo-4040.netlify.app/"
              />

              <Portfolio
                image="./react-emoji-directory.png"
                name="React Emoji Directory"
                projectUrl="https://react-emoji-directory.netlify.app/"
              />

              <Portfolio
                image="./react-ttt.png"
                name="React Tic Tac Toe"
                projectUrl="https://ssakib4040.github.io/react-tic-tac-toe/"
              />

              <Portfolio
                image="./react-counter.png"
                name="React Counter"
                projectUrl="https://react-counter-ssakib4040.netlify.app/"
              />

              <Portfolio
                image="./react-password-generator.png"
                name="React Password Generator"
                projectUrl="https://react-password-generator-4040.netlify.app/"
              />

              <Portfolio
                image="https://firebasestorage.googleapis.com/v0/b/production-portfolio-9a395.appspot.com/o/authentication.png?alt=media&token=954688ca-1a5b-44f4-8a13-d80c741255fe"
                name="Mern Authentication"
                projectUrl="https://mern-authentication-ssakib4040.herokuapp.com/"
              />

              <Portfolio
                image="https://firebasestorage.googleapis.com/v0/b/production-portfolio-9a395.appspot.com/o/authentication-2.0.png?alt=media&token=7951396f-2e52-471c-9bc2-82710af3b8bf"
                name="Mern Authentication 2.0"
                projectUrl="https://mern-authentication-2.herokuapp.com/"
              />

              <Portfolio
                image="https://firebasestorage.googleapis.com/v0/b/production-portfolio-9a395.appspot.com/o/ecommerce.png?alt=media&token=00b332d6-9e47-4ab3-b655-21fe433bec79"
                name="Mern Ecommerce"
                projectUrl="https://mern-ecommerce-ssakib4040.herokuapp.com/"
              />
            </div>
          </div>
          <hr />
        </div>

        {/* npm package */}
        <div className="portfolio mt-5" id="portfolio">
          <h2>NPM Package</h2>
          <div className="container">
            <div className="row">
              <Portfolio
                image="./npm-logo-placeholder.webp"
                name="Mongoose Error Beautify"
                projectUrl="https://www.npmjs.com/package/mongoose-error-beautify"
                btnText="Link"
              />

              <Portfolio
                image="./npm-logo-placeholder.webp"
                name="Math Dumb"
                projectUrl="https://www.npmjs.com/package/math-dumb"
                btnText="Link"
              />
            </div>
          </div>
          <hr />
        </div>

        {/* contact  */}
        <div className="contact" id="contact">
          <h2>Contact</h2>
          <hr />

          <a
            href="https://github.com/ssakib4040"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github-square"></i>
          </a>

          <a href="https://fb.com/ssakib4040" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://twitter.com/ssakib4040"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a href="mailto:ssakib4040@gmail.com">
            <i className="fa-solid fa-at"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Portfolio(props) {
  return (
    <div className="col-xl-3 mb-3">
      <div className="card ">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <a
            href={props.projectUrl}
            className="btn btn-primary mt-3"
            target="_blank"
            rel="noreferrer"
          >
            {props?.btnText ? props.btnText : "Demo"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
