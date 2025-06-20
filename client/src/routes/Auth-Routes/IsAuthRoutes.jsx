import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { IsAuthnticate } from "../../context/Auth/IsAuth";

function IsAuthRoutes({ children }) {
  const { Auth } = useContext(IsAuthnticate);
  useEffect(() => {
    if (!Auth.loading && Auth.islogined) {
    } else if (!Auth.loading && !Auth.islogined) {
    }
  }, [Auth?.loading, Auth?.islogined]);

  return Auth.loading ? (
    "loading..."
  ) : Auth.islogined ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default IsAuthRoutes;
