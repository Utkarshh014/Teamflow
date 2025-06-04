import './App.css';
import './Header.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="App">
    <Header/>

    <div className='app__body'>
      <Sidebar/>
      {/* Sidebar */}
      {/* React-Router -> Chat Screen */}
    </div>

    </div>
  );
}

export default App;
