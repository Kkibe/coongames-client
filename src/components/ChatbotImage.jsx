import React, { useContext } from 'react';
import Image from '../assets/chatbot.png';
import { BotContext } from '../SourceContext';

export default function ChatbotImage() {
  const {botVisible, setBotVisible} = useContext(BotContext);
  return (
    <div className='chatbot-image' onClick={() => setBotVisible('flex')}>
        <img src={Image} alt="chatbot-image" />
    </div> 
  );
}