import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Register() {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    error && setTimeout(() => {setError(null)}, 3000)
  }, [])
  return (
    <div className='register'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|REGISTER</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/register" />
        </Helmet>
        <h1>Register For Free!</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">USERNAME</label>
            <input type="text" id="username" placeholder='username' onChange={(e) => setUsername(e.target.value)} required/>
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="username" placeholder='email' onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="username" placeholder='password' onChange={(e) => setPassword(e.target.value)} required maxLength='16'/>
            <label htmlFor="repeat-password">REPEAT PASSWORD</label>
            <input type="password" id="repeat-password" placeholder='repeat-password' onChange={(e) => setRepeatPassword(e.target.value)} required maxLength='16'/>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  );
}
