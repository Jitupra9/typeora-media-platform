import React, { createContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-hot-toast";
export const IsAuthnticate = createContext();

function IsAuth({ children }) {
  const [Auth, setAuth] = useState({
    user: [""],
    islogined: false,
    loading: true,
    token: null,
  });

  const fetchUser = () => {
    const result = JSON.parse(localStorage.getItem("userData") || "null");

    if (result?.user?._id) {
      setAuth((prev) => ({
        ...prev,
        islogined: true, // change it TRUE if successfully login
        user: result?.user,
        loading: false,
        token: result?.token,
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
  const LoginAlert = () => {
    toast.error("Please log in to access this feature");
  };
  const contextValue = useMemo(() => ({ Auth, setAuth, LoginAlert }), [Auth]);

  return (
    <IsAuthnticate.Provider value={contextValue}>
      {children}
    </IsAuthnticate.Provider>
  );
}

export default IsAuth;
