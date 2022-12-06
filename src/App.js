import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='coins/:id' element = {<CoinPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
