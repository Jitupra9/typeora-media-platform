import React, { createContext, useEffect, useState, useMemo } from "react";

export const IsAuthnticate = createContext();

function IsAuth({ children }) {
  const [Auth, setAuth] = useState({
    user: [""],
    islogined: false,
    loading: true,
  });

  const fetchUser = () => {
    const result = JSON.parse(localStorage.getItem("userData") || "null");

    if (result?.user?._id) {
      setAuth((prev) => ({
        ...prev,
        islogined: true,
        user: result?.user,
        loading: false,
      }));
    } else {
      setAuth((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const contextValue = useMemo(() => ({ Auth, setAuth }), [Auth]);

  return (
    <IsAuthnticate.Provider value={contextValue}>
      {children}
    </IsAuthnticate.Provider>
  );
}

export default IsAuth;
