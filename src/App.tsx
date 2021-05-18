import "./App.css";
import { Header, HeroSection, Toast } from "./Components";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useStore } from "./Store";
import URL from "./Components/ServerURL";

const App = () => {
  const { storeState, storeDispatch } = useStore();
  const { loadingMessage } = storeState;

  const fetchQuizzes = async () => {
    storeDispatch({ type: "IS_LOADING", payload: "loading" });
    try {
      const response = await axios(`${URL}/quiz`);
      const quizzes = response.data.quizzes;
      if ((response.status = 200)) {
        storeDispatch({ type: "LOAD_QUIZZES", payload: quizzes });
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="container bg-blue-400 h-screen">
      <Router>
        <Header />
        {loadingMessage === "loading" ? (
          <Toast title="Loading Data" />
        ) : (
          <HeroSection />
        )}
      </Router>
    </div>
  );
};

export default App;
