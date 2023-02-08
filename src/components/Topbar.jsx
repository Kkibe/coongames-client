import React, { useContext } from 'react';
import {NavLink } from 'react-router-dom';
import Icon from '../assets/logo.png';
import { UserContext } from '../SourceContext';

export default function Topbar() {
  const {user}= useContext(UserContext);
  return (
  <div className='topbar'>
    <NavLink to='/' className="logo" title='coongames'>
      <img src={Icon} alt="coongames-logo" />
    </NavLink>
    <div className="navigation">
        <NavLink to="/" style={({ isActive }) => {return {background: isActive ? "#00c441" : ""};}} title='home'>HOME</NavLink>
        <NavLink to="/games" style={({ isActive }) => {return {background: isActive ? "#00c441" : ""};}} title='games'>GAMES</NavLink>
        <NavLink to="/blogs" style={({ isActive }) => {return {background: isActive ? "#00c441" : ""};}} title='posts'>POSTS</NavLink>
        <NavLink to="/about" style={({ isActive }) => {return {background: isActive ? "#00c441" : ""};}} title='about'>ABOUT</NavLink>
    </div>
    {
      user && (
        <div className="btn-group">
          <a href="/login" title='login'><button>LOGIN</button></a>
          <a href="/register" title='register'><button className='register-btn'>REGISTER</button></a>
        </div>
      )
    }
  </div>
  );
}
