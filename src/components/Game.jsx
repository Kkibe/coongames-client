import React from 'react';
export default function Game({game}) {
  return (
    <div className="item game">
        <div className="image-container">
          <img src={game.thumbnail} alt={game.title} />
        </div>
        <h2>
          {game.title}
        </h2>
        <p>{game.description ? game.description : game.short_description}</p>
        <a href={game.gamerpower_url ? game.gamerpower_url : game.freetogame_profile_url} target='_blank' title='game'><button className="visitBtn">Play</button></a>
    </div>
  );
}