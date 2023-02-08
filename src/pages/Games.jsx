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
      'X-RapidAPI-Key': process.env.REACT_APP_GAMEPOWER_API_KEY,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  const freeToPlay = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_FREETOPLAY_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    setFetching(true);
    axios.request(value == 'coongames' ? freeToPlay : gamepower).then(function (response) {
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
        <option value="coongames">COONGAMES</option>
        <option value="marvel">MARVEL</option>
        <option value="rapid">RAPID</option>
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