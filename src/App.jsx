import React, { useState } from "react";
import Login from "./Components/Login.jsx";
import ChatBot from "./Components/ChatBot.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      
      {/* Login show if user is not exist */}
     {!user && <Login onLogin = {setUser}/>}

     {/* Chatbot show if user is exist */}
     {user && <ChatBot user = {user}/>}
    </div>
  );
}

export default App;