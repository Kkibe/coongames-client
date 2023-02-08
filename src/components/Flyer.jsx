import React from 'react';
import Video from '../assets/rock-and-paper.webm';
import Icon from '../assets/logo.png';

export default function Flyer() {
  return (
    <div className="flyer">
      <video src={Video} controls />
      <img src={Icon} alt="" />
    </div>
  );
}
