import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Settings() {
    const [file, setFile] = useState(null);
    const handleUpdate = (e) => {
        e.preventDefault();
    }
  return (
    <div className='settings'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|SETTINGS</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/settings" />
        </Helmet>
        <h1>Complete your profile</h1>
        <form>
            <div className="form-group">
                <div className="image-container">
                    <img src={file &&URL.createObjectURL(file)} alt="" />
                    <label htmlFor="image" className='file' ></label>
                </div>
                <input type="file" placeholder='Image' id='image' onChange={(e) => setFile(e.target.files[0])}/>
                <button>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="username">USERENAME</label>
                <input type="text" placeholder='Username' id='username'/>
                <button>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="about">ABOUT</label>
                <textarea type="text" placeholder='Write something about yourself...' id='about' maxLength='150'/>
                <button>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder='example@gmail.com' id='email'/>
                <button>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input type="password" placeholder='Password' id='password'/>
                <button>update</button>
            </div>
        </form>
    </div>
  );
}
