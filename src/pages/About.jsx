import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div className='about'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|ABOUT</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/about" />
        </Helmet>
      <section>
            <h1>About Coongames</h1>
            <div className='description'>
                Relax and Play Games from The world's best gaming sites for Free!
            </div>
      </section>
      <ul class="accordion" id='faq'>
        <h2>Frequently Asked Questions</h2>
        <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">What is Coongames?</label>
            <div class="content">
                Coongames is a gaming site that allows you to stream and play a variety of games from the World's most famous gaming sites like marvel.
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">How Play Games from Coongames for free?</label>
            <div class="content">
                <p>
                    Go to games page and select the game you want to play by clicking play button.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Do I have to pay to play?</label>
            <div class="content">
                <p>
                    Absolutely not, Coongames allows to Play Games for free. 
                </p>
            </div> 
        </li>
      </ul>
        <span>Connect with us</span>
        <div className='icons'>
            <a href="https://www.facebook.com/profile.php?id=100076782242417" title='facebook' target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com/ancientpupy/" target="_blank" title='twitter'><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/ancientpupy/" target="_blank" title='instagram'><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@coongames8" target="_blank" title='youtube'><i className="fab fa-youtube"></i></a>
            <a href="https://github.com/K-kibet/coongames" target="_blank" title='github'><i className="fab fa-github"></i></a>
        </div>
    </div>
  )
}

export default About
