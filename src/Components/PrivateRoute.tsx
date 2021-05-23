import React from "react";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ ...props }) => {
  const storage = localStorage?.getItem("QuizLoginUser");

  if (storage !== null) {
    const loginStatus = JSON.parse(storage);
    if (loginStatus.isUserLogin) {
      return <Route {...props} />;
    } else return <Navigate to="/login" />;
  } else return <Navigate to="/login" />;
};
