import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='coins/:id' element = {<CoinPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
