import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CoinPage from './components/CoinPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<><Header /> <Home /></>} />
        <Route path='coins/:id' element = {<><Header /> <CoinPage /></>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
