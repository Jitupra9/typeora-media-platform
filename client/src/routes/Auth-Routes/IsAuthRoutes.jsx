import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
function IsAuthRoutes({ children }) {
  const { islogined, loading } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (!loading && islogined) {
    } else if (!loading && !islogined) {
    }
  }, [loading, islogined]);

  return loading ? (
    "loading..."
  ) : islogined ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default IsAuthRoutes;
