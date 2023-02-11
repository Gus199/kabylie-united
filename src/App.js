import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/joinus' element={<JoinUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
