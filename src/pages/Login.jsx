import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { UserContext } from '../SourceContext';

export default function Login() {
    const {user, setUser}  = useContext(UserContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://coongames-api.onrender.com/api/auth/login', {
      username,
      password
    }).then(res => {
      setUser(res.data);
      window.localStorage.setItem('coongames-user', JSON.stringify(res.data));
    }).catch(error => {
      setError(error);
    })
  }
  useEffect(() => {
    user && window.history.back()
    error && setTimeout(() => {setError(null)}, 3000)
  }, [error, user])
  return (
    <div className='login'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|LOGIN</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/login" />
        </Helmet>
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">USERNAME</label>
            <input type="text" id="username" placeholder='username' onChange={(e) => setUsername(e.target.value)} required/>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="username" placeholder='password' onChange={(e) => setPassword(e.target.value)} required maxLength='16'/>
            <button type="submit">SUBMIT</button>
            {error && <p className='error'>{error.message}</p>}
        </form>
    </div>
  );
}
