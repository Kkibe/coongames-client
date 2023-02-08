import React from 'react';
import Icon from '../assets/logo.png';

export default function Footer() {
  return (
  <div className='footer'>
    <div className="wrapper">
      <section>
          <h3><img src={Icon} alt="" /><div>COONGAMES</div></h3>
          <div className="container">
              <a href="/" title='healthgen'>HOME</a>
              <a href="/games" title='books'>PLAY GAMES</a>
              <a href="/blogs" title='contact'>READ BLOGS</a>
              <a href="/about" title='contact'>ABOUT US</a>
          </div>
      </section>
      {/*
      <section>
          <h3>HOT GAMES ARCADE</h3>
          <div className="container">
              <a href="./fruit-ninja/index.html" title='about'>FRUIT NINJA</a>
              <a href="./cheap-ai-chess/index.html" title='support'>CHESS</a>
              <a href="./zombie-shooter-game-main/index.html" title='privacy'>ZOMBIE SHOOTER</a>
              <a href="./rock-paper-scissors-lizard-spock-game/index.html" title='terms'>ROCK & PAPER</a>
          </div>
      </section>*/}
      <section>
          <h3>USEFUL LINKS</h3>
          <div className="container">
              <a href="/login" title='login'>LOGIN</a>
              <a href="/register" title='register'>REGISTER</a>
              <a href="/profile" title='profile'>ACCOUNT PROFILE</a>
              <a href="/settings" title='feedback'>ACCOUNT SETTINGS</a>
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
