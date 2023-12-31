import {useEffect, useState } from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import { BotContext, SourceContext, ThemeContext, UserContext } from "./SourceContext";

import Topbar from "./components/Topbar";
import Chatbot from "./components/Chatbot";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import ChatbotImage from "./components/ChatbotImage";

function App() { 
  const [value, setValue] = useState('FREE TO PLAY');
  const [theme, setTheme] = useState('Light');
  const [user, setUser]  = useState(null);
  const [botVisible, setBotVisible] = useState('none');

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children
  };

  useEffect(() => {
    setUser(JSON.parse( window.localStorage.getItem('coongames-user')) || null);
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])
  return (
  <SourceContext.Provider value={{value, setValue}} >
    <ThemeContext.Provider value={{theme, setTheme}}>
      <UserContext.Provider value={{user, setUser}}>
        <BotContext.Provider value={{botVisible, setBotVisible}}>
          <div className={`App + " " ${theme}`} >
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
              <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> 
              <Route path="*" element={<ErrorPage />} /> 
            </Routes>
            <ChatbotImage></ChatbotImage>
            <Chatbot />
            <Newsletter />
            <Footer />
          </div>
        </BotContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  </SourceContext.Provider>
  );
}
export default App;