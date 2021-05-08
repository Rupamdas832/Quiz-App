import React, { useState } from 'react';
import './App.css';
import { Header, QuestionCard } from './Components';

const App = () => {
  const [score, setScore] = useState(0)

  const username = "Rupam Das"

  return (
    <div className="App">
      <Header username={username} score={score}/>
      <h1>📚Quizz App</h1>
      <QuestionCard/>
    </div>
  );
}

export default App;
