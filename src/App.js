import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Message from "./Pages/Message/Message";
import Comments from "./Pages/Comments/Comments";
import Chats from "./Pages/Chats/Chats";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/Profile/:userId' element={<Profile/>}/>
        <Route path='/Message/:userId' element={<Message/>}/>
        <Route path='/Comments/:postId' element={<Comments/>}/>
        <Route path='/Chats/' element={<Chats/>}/>
      </Routes>
    </div>
  );
}

export default App;
