

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import octofitLogo from '../public/octofitapp-small.png';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
            <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities"><i className="bi bi-list-task me-1"></i>Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard"><i className="bi bi-trophy me-1"></i>Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams"><i className="bi bi-people me-1"></i>Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users"><i className="bi bi-person me-1"></i>Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts"><i className="bi bi-heart-pulse me-1"></i>Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="text-center mt-5">
              <h1 className="display-3 fw-bold text-primary mb-3">Welcome to OctoFit Tracker!</h1>
              <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/activities" className="btn btn-outline-primary btn-lg">View Activities</Link>
                <Link to="/workouts" className="btn btn-outline-danger btn-lg">View Workouts</Link>
                <Link to="/leaderboard" className="btn btn-outline-success btn-lg">Leaderboard</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
