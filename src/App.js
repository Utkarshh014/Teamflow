import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login.js';
import { useStateValue } from './StateProvider.js';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login/>
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
