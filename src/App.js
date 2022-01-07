import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/navbar';
import Header from './Components/header';
import Services from './Components/services';
import Footer from './Components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Contest from './Components/contest';
import Leaderboard from './Components/leaderboard';
import Homepage from './Components/homepage';

function App() {
  return (
    // <div className="App">
    //   <NavBar/>
    //   <Services/>
    //   <Footer/>
    // </div>
    <Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/contest" element={<Contest />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
			</Routes>
		</Router>
  );
}

export default App;
