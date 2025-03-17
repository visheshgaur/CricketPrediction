import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css"
const teams = [
  { name: "India", flag: "https://flagcdn.com/w320/in.png" },
  { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
  { name: "England", flag: "https://flagcdn.com/w320/gb.png" },
  { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
  { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
  { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
  { name: "West Indies", flag: "https://flagcdn.com/w320/wi.png" },
  { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
  { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
  { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
  { name: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" },
  { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
  { name: "Scotland", flag: "https://flagcdn.com/w320/gb-sct.png" },
  { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
  { name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png" },
  { name: "Oman", flag: "https://flagcdn.com/w320/om.png" },
  { name: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
  { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
  { name: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png" },
  { name: "Hong Kong", flag: "https://flagcdn.com/w320/hk.png" },
  { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
  { name: "Kenya", flag: "https://flagcdn.com/w320/ke.png" },
  { name: "Bermuda", flag: "https://flagcdn.com/w320/bm.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
  { name: "Qatar", flag: "https://flagcdn.com/w320/qa.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
  { name: "Italy", flag: "https://flagcdn.com/w320/it.png" }

];

const grounds = [
  "Melbourne Cricket Ground",
  "Lord's Cricket Ground",
  "Eden Gardens",
  "Kensington Oval",
  "Queen's Park Oval",
  "Sabina Park",
  "Darren Sammy National Cricket Stadium",
  "Antigua Recreation Ground",
  "Providence Stadium",
  "R. Premadasa Stadium",
  "Galle International Stadium",
  "Pallekele International Cricket Stadium",
  "Sinhalese Sports Club Ground",
  "Mahinda Rajapaksa International Cricket Stadium",
  "Newlands Cricket Ground",
  "Wanderers Stadium",
  "Kingsmead Cricket Ground",
  "Centurion Park",
  "St George's Park",
  "Boland Park",
  "Gaddafi Stadium",
  "National Stadium",
  "Rawalpindi Cricket Stadium",
  "Multan Cricket Stadium",
  "Arbab Niaz Stadium",
  "Eden Park",
  "Hagley Oval",
  "Basin Reserve",
  "Seddon Park",
  "University Oval",
  "Bay Oval",
 
  "Wankhede Stadium",
  "Arun Jaitley Stadium",
  "Chinnaswamy Stadium",
  "MA Chidambaram Stadium",
  "Sardar Patel Stadium (Narendra Modi Stadium)",
  "Rajiv Gandhi International Cricket Stadium",
  
  "The Oval",
  "Trent Bridge",
  "Old Trafford",
  "Headingley",
  "Edgbaston",
  "Rose Bowl (Ageas Bowl)",


];

const Home = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    <h2>Welcome to Cricket Prediction</h2>
    <p>Use our platform to predict cricket match outcomes!</p>
  </motion.div>
);

const Predictions = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [ground, setGround] = useState("");
  const [result, setResult] = useState(null);

  const predict = () => {
    if (!team1 || !team2 || !ground) {
      alert("Please fill all the fields.");
      return;
    }
    if (team1 === team2) {
      alert("both teams cannot be same");
      return;
    }
    const predictionRate = (Math.random() * (75 - 40) + 40).toFixed(2);
    setResult(`${team1} has a ${predictionRate}% win probability against ${team2} at ${ground}.`);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2>Match Prediction</h2>
      <div className="form-group">
        <label>Team 1</label>
        <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
          <option value="">Select Team 1</option>
          {teams.map((team) => (
            <option key={team.name} value={team.name}>{team.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Team 2</label>
        <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
          <option value="">Select Team 2</option>
          {teams.map((team) => (
            <option key={team.name} value={team.name}>{team.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Ground</label>
        <select value={ground} onChange={(e) => setGround(e.target.value)}>
          <option value="">Select Ground</option>
          {grounds.map((g, index) => (
            <option key={index} value={g}>{g}</option>
          ))}
        </select>
      </div>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        onClick={predict}
      >
        Predict
      </motion.button>
      {result && <div className="result">{result}</div>}
    </motion.div>
  );
};

const About = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    <h2>About Cricket Prediction</h2>
    <p>This platform uses advanced algorithms to predict cricket match outcomes.</p>
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <header>
        <h1>Cricket Prediction</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/predictions">Predictions</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>2025 Cricket Prediction. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
