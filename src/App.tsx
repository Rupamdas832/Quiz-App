import './App.css';
import { Header, HeroSection } from './Components';
import {BrowserRouter as Router} from "react-router-dom"

const App = () => {

  return (
    <div className="container bg-blue-400 h-screen">
      <Router>
        <Header/>
        <HeroSection/>
      </Router> 
    </div>
  );
}

export default App;
