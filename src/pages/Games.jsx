import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Game from '../components/Game';
import Loader from '../components/Loader';
import { SourceContext } from '../SourceContext';

export default function Games() {
  const {value, setValue}= useContext(SourceContext);
  const [games, setGames] = useState(null);
  const [fetching, setFetching] = useState(false);

  const gamepower = {
    method: 'GET',
    url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
    params: {'sort-by': 'value'},
    headers: {
      'X-RapidAPI-Key': '7015901614mshbeaa572245b6bffp123fd4jsn9b3a74df405d',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  const freeToPlay = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': '7015901614mshbeaa572245b6bffp123fd4jsn9b3a74df405d',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const coongames = {
    method: 'GET',
    url: 'https://coongames-api.onrender.com/api/games'
  };

  useEffect(() => {
    setFetching(true);
    axios.request(gamepower/*value == 'freeToPlay' ? freeToPlay : gamepower*/).then(function (response) {
      setGames(response.data);
      setFetching(false);
    }).catch(function (error) {
      console.error(error); 
      setFetching(false);
    });
  }, [value]);
  return (
  <div className="games">
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|GAMES</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/games" />
        </Helmet>
    <div className="top">
      <span>{value}</span>
      <select onChange={(e) => setValue(e.target.value)}
        value={value}>
        <option value="FREE TO PLAY">FREE TO PLAY</option>
        <option value="GAME POWER">GAME POWER</option>
        <option value="COONGAMES">COONGAMES</option>
      </select>
    </div>
    <div className="wrapper">
      {
        games &&  games.map((game) => {
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
  </div>
  );
}