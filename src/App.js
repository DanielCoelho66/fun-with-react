import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import Home from './pages/Home';
import Counter from './pages/Counter';
import Filter from './pages/Filter';
import ErrorPage from './pages/ErrorPage';
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <Router basename="/fun-with-react">
      {/* everything between the router tags appears on every page */}
      <div style={{width: 100 + "VW"}} className='navBar'>
      <nav className='nav'>
        <Link className='navLink' to="/"> Home </Link>
        <Link className='navLink' to="/filter"> Filter </Link>
        <Link className='navLink' to="/counter"> Counter </Link>
        <Link className='navLink' to="/tictactoe"> TicTacToe </Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="*" element={< ErrorPage />} />
      </Routes>  
      {/* <div> Footer goes here </div> */}
    </Router>
  );
}

export default App;
