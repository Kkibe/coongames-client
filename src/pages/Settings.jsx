import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { UserContext } from '../SourceContext';

export default function Settings() {
    const {user}= useContext(UserContext);
    const [email, setEmail] = useState(null);
    const [about, setAbout] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [file, setFile] = useState(null);

    const handleUpdate = (type) => {
        const userRequest = axios.create({
            baseURL: 'https://coongames-api.onrender.com/api',
            headers: {
                token: `Bearer ${user.accessToken}`,
                "Content-Type": "application/json",

            },
            
        })
        if(type === "file") {
            if(!file) return;
            const fileData = new FormData();
            const filename = Date.now() + file.name;
            fileData.append("name", filename);
            fileData.append("img", file);

            userRequest.post(`/upload/${user.others._id}`, fileData).then(res => {
                axios.put(`/users/${user.others._id}`, {img : filename})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            return;
        } else if(type === "about"){
            if((about != "")) {
                userRequest.put(`/users/${user.others._id}`, {about : about})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
            return;
            
        } else if(type === "username"){
            if((username != user.others.username) && (username != "")) {
                userRequest.put(`/users/${user.others._id}`, {username})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
            return;
        } else if(type === "email"){
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email != user.others.email) {
                if (!email.match(regex)) return;
                userRequest.put(`/users/${user.others._id}`, {email})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
            return;
            
        } else if(type === "password"){
            if((password != "") && (password.length >= 8)) {
                userRequest.put(`users/${user.others._id}`, {password})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
            return;
        } else {
            return;
        }
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
        <section>
            <div className="form-group">
                <div className="image-container">
                    <img src={file &&URL.createObjectURL(file)} alt="" />
                    <label htmlFor="image" className='file'><i class="fas fa-image"></i></label>
                </div>
                <input type="file" placeholder='Image' id='image' onChange={(e) => setFile(e.target.files[0])}/>
                <button onClick={() => handleUpdate("file")}>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="username">USERENAME</label>
                <input type="text" placeholder='Username' id='username' onChange={(e) => setUsername(e.target.value)} value={user && user.others.username}/>
                <button onClick={() => handleUpdate("username")}>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="about">ABOUT</label>
                <textarea type="text" placeholder='Write something about yourself...' onChange={(e) => setAbout(e.target.value)}  id='about' maxLength='150' value={/*user.others.about ? user.others.about :*/ ""}/>
                <button onClick={() => handleUpdate("about")}>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder='example@gmail.com' id='email' onChange={(e) => setEmail(e.target.value)}   value={user && user.others.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                <button onClick={() => handleUpdate("email")}>update</button>
            </div>
            <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input type="password" placeholder='Password' id='password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => handleUpdate("password")}>update</button>
            </div>
        </section>
    </div>
  );
}
