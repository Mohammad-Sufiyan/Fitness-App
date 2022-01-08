
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/navbar';
import Header from './Components/header';
import Services from './Components/services';
import Footer from './Components/footer';
import './App.css';
import Contest from './Components/contest';
import Leaderboard from './Components/leaderboard';
import Homepage from './Components/homepage';
import Register from './Components/register';
import Login from './Components/login';
import Profile from './Components/profile.js';
import Discuss from './Components/discuss';

function App() {
  return (

    <Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/contest" element={<Contest />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
			</Routes>
		</Router>
  );
}

export default App;
