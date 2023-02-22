import React, { useContext, useState } from 'react';
import Image from '../assets/logo.png';
import BotImage from '../assets/chatbot.png';
import { BotContext } from '../SourceContext';

export default function Chatbot() {
  const {botVisible, setBotVisible} = useContext(BotContext);
  const [text, setText] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) return;
    alert(text);
    e.target.children[0].value = '';
  }
  return (
<section className="msger chatbot" style={{display: botVisible}}>
  <header>
      <i className="fas fa-comment-alt"></i>  
      <span>Coongames Chat</span>
      <i className="fas fa-close" onClick={() => setBotVisible('none')}>x</i>
  </header>
  <main>
    <div className="msg left-msg">
      <img src={BotImage} alt="" />
      <div>
        <div className="msg-info">
          <div className="name">BOT</div>
          <div className="time">12:45</div>
        </div>
        <div className="msg-text">
          Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
        </div>
      </div>
    </div>
    <div className="msg right-msg">
      <img src={Image} alt="" />
      <div>
        <div className="msg-info">
          <div className="name">Sajad</div>
          <div className="time">12:46</div>
        </div>
        <div className="msg-text">
          You can change your name in JS section!
        </div>
      </div>
    </div>
  </main>

  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter your message..." onChange={(e) => setText(e.target.value)}/>
    <button type="submit" >Send</button>
  </form>
</section>
  );
}
