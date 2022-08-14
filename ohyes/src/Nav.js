import React, { useEffect, useState } from "react";
import "./nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://toppng.com/public/uploads/thumbnail/my-design-oh-yes-11563540485fa1wdw3ayu.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
      {/* <div className="menu">
        <button className="menu__btn">Top Pick</button>
        <button className="menu__btn">Classic Cinema</button>
        <button className="menu__btn">New Releases</button>
        <button className="menu__btn">Documentaries</button>
        <button className="menu__btn">Short Films</button>
      </div> */}
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="news">News</a>
        <a href="contact">Contact</a>
        <a href="about">About</a>
        <a href="classic_cinema">Classic Cinema</a>
        <a href="short_films">Short Films</a>
        <input type="text" placeholder="Search.."></input>
        <button className="register__btn">Register</button>
      </div>
      <div class="bottom__navbar">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
