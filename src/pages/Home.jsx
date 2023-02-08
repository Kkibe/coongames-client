import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Flyer from '../components/Flyer';
import Game from '../components/Game';
import Loader from '../components/Loader';
import HomePost from '../components/HomePost';
import { Helmet } from 'react-helmet';

export default function Home() {
  const [games, setGames] = useState(null);
  const [posts, setPosts] = useState(null);
  const [fetching, setFetching] = useState(false);
  
  const url = 'https://newsdata.io/api/1/news?apikey=pub_1237237f365d7ff387104765b2874bb6ca618&q=gaming'

  useEffect(() => {
    const options ={
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': '7015901614mshbeaa572245b6bffp123fd4jsn9b3a74df405d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    setFetching(true);
    axios.request(options).then(function (response) {
      setGames(response.data);
    }).catch(function (error) {
      console.error(error); 
    });
    axios.request(url).then(function (response) {
      setPosts(response.data.results.filter(item => {return item.image_url != null}));
      setFetching(false);
    }).catch(function (error) {
      console.error(error); 
      setFetching(false);
    });
  }, []);
  return (
    <div className='home'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/" />
        </Helmet>
        <Flyer />
        <h1>Hot Games</h1>
        <div className="wrapper">
        {
          games &&  games.splice(0, 4).map((game) => {
            return <Game key={game.id} game={game}/>
          })
        }
        </div>
        {
          fetching && (<div className="wrapper">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>)
        }
        { posts && <h1>Popular Blogs</h1> }
        <div className="wrapper">
          {
            posts &&  posts.map((post) => {
              return <HomePost key={post.link} post={post}/>
            }) 
          }
        </div>
    </div>
  );
}
