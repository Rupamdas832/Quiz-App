import React, { useState } from 'react';
import './App.css';
import { Header, QuestionCard } from './Components';

const App = () => {
  const [score, setScore] = useState(0)

  const username = "Rupam Das"

  return (
    <div className="flex flex-col">
      <Header username={username} score={score}/>
      <h1 className="text-xl font-medium text-black">📚Quizz App</h1>
      <QuestionCard/>
    </div>
  );
}

export default App;
