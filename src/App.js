import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <h1>LOGIN page</h1>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
