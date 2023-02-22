import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Image from '../assets/logo.png';
import { UserContext } from '../SourceContext';

const Profile = () => {
    const {user, setUser}= useContext(UserContext);

    const handleLogout = () => {
        window.localStorage.removeItem('coongames-user');
        setUser(null);
    }
    return (
        <div className='profile'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|PROFILE</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/profile" />
        </Helmet>
            <div className="cover-photo">
                <img src={user.others.img ? user.others.img : Image} alt="" className='profile-image'/>
            </div>
            <div className="profile-name">{user.others.username}</div>
            <h3>{user.others.email}</h3>
            <div>SUBSCRIPTION : {user.others.subscription.toUpperCase()}</div>
            <p className="about">
                User Interface Designer and <br /> fron-end developer
            </p>  

            <button  onClick={handleLogout}>
                LOGOUT
            </button>
        </div>
    );
}
export default Profile;