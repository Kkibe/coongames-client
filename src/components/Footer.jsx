import React from 'react';
import Icon from '../assets/logo.png';
import {NavLink } from 'react-router-dom';

export default function Footer() {
  return (
  <div className='footer'>
    <div className="wrapper">
      <section>
          <h3><img src={Icon} alt="" /><div>COONGAMES</div></h3>
          <div className="container">
              <NavLink to="/" title='healthgen'>HOME</NavLink>
              <NavLink to="/games" title='books'>PLAY GAMES</NavLink>
              <NavLink to="/blogs" title='contact'>READ BLOGS</NavLink>
              <NavLink to="/about" title='contact'>ABOUT US</NavLink>
          </div>
      </section>
      {/*
      <section>
          <h3>HOT GAMES ARCADE</h3>
          <div className="container">
              <NavLink to="./fruit-ninja/index.html" title='about'>FRUIT NINJA</NavLink>
              <NavLink to="./cheap-ai-chess/index.html" title='support'>CHESS</NavLink>
              <NavLink to="./zombie-shooter-game-main/index.html" title='privacy'>ZOMBIE SHOOTER</NavLink>
              <NavLink to="./rock-paper-scissors-lizard-spock-game/index.html" title='terms'>ROCK & PAPER</NavLink>
          </div>
      </section>*/}
      <section>
          <h3>USEFUL LINKS</h3>
          <div className="container">
              <NavLink to="/login" title='login'>LOGIN</NavLink>
              <NavLink to="/register" title='register'>REGISTER</NavLink>
              <NavLink to="/profile" title='profile'>ACCOUNT PROFILE</NavLink>
              <NavLink to="/settings" title='feedback'>ACCOUNT SETTINGS</NavLink>
          </div>
      </section>
    </div>
      <div className="bottom">
        <p>&copy;coongames 2023</p>
        <div className="social">
          <div className="icon facebook">
            <a href="https://www.facebook.com/profile.php?id=100076782242417" title='facebook' target="_blank"><i className="fab fa-facebook-f"></i></a>
            <div className=" tooltip">Facebook</div>
          </div>
          <div className="icon twitter">
          <a href="https://www.twitter.com/ancientpupy/" title='twitter' target="_blank"><i className="fab fa-twitter"></i></a>
            <div className="tooltip">Twitter</div>
          </div>
          <div className="icon instagram">
            <a href="https://www.instagram.com/ancientpupy/" title='instagram' target="_blank"><i className="fab fa-instagram"></i></a>
            <div className="tooltip">Instagram</div>
          </div>
          <div className="icon github">
            <a href="https://github.com/K-kibet/coongames" title='github' target="_blank"><i className="fab fa-github"></i></a>
            <div className="tooltip">Github</div>
          </div>
          <div className="icon youtube">
            <a href="https://www.youtube.com/@coongames8" title='youtube' target="_blank"><i className="fab fa-youtube"></i></a>
            <div className="tooltip">Youtube</div>
          </div>
        </div>
      </div>
  </div>
  );
}
