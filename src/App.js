import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Routes>
          <Route path="/room/:roomId" element={<Chat />} />
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
