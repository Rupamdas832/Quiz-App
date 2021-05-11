import React, { useState } from 'react';
import './App.css';
import { Header, HeroSection, QuestionCard } from './Components';
import {BrowserRouter as Router} from "react-router-dom"

const App = () => {
  const [score, setScore] = useState(0)

  const username = "Rupam Das"

  return (
    <div className="container bg-blue-900 h-screen">
      <Router>
        <Header username={username} score={0}/>
        <HeroSection/>
      </Router> 
    </div>
  );
}

export default App;
