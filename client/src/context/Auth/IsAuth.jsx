import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

export const IsAuthnticate = createContext();

function IsAuth({ children }) {
  const SERVER_URL = process.env.REACT_APP_API_URL;

  const [Auth, setAuth] = useState({
    user: [""],
    islogined: false,
    loading: true,
  });

  const fetchUser = useCallback(async () => {
    try {
      const result = await axios.get(`${SERVER_URL}/fetchUser`, {
        withCredentials: true,
      });
      if (result.data?.success) {
        setAuth((prev) => ({
          ...prev,
          islogined: true,
          user: result?.data?.user,
          loading: false,
        }));
      } else {
        setAuth((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    } catch (err) {
      console.log(err);
      setAuth((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }, [SERVER_URL]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const contextValue = useMemo(() => ({ Auth, setAuth }), [Auth]);

  return (
    <IsAuthnticate.Provider value={contextValue}>
      {children}
    </IsAuthnticate.Provider>
  );
}

export default IsAuth;
