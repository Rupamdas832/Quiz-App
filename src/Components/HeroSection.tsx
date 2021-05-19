import React from "react";
import { Route, Routes } from "react-router";
import {
  Categories,
  Home,
  LeaderBoard,
  Login,
  Result,
  ReviewQuiz,
  Signup,
} from "../Pages";
import { QuestionCard } from "../Components";
import { PrivateRoute } from "./PrivateRoute";

export const HeroSection = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <PrivateRoute path="/quiz" element={<QuestionCard />} />
        <Route path="/leader-board" element={<LeaderBoard />} />
        <PrivateRoute path="/result" element={<Result />} />
        <PrivateRoute path="/review-quiz" element={<ReviewQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};
