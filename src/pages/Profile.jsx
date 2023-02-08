import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Image from '../assets/logo.png';
import { UserContext } from '../SourceContext';

const Profile = () => {
    const {user}= useContext(UserContext);
    return (
        <div className='profile'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|PROFILE</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/profile" />
        </Helmet>
            <div className="cover-photo">
                <img src={Image} alt="" className='profile-image'/>
            </div>
            <div className="profile-name">{/*user.currentUser && user.currentUser.others.username*/}Name</div>
            <h3>{/*user.currentUser && user.currentUser.others.email*/}email</h3>
            <p className="about">
                User Interface Designer and <br /> fron-end developer
            </p>  
        </div>
    );
}
export default Profile;