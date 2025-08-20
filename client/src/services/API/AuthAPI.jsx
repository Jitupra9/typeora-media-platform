import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setUser,
  setLoginStatus,
  setLoading,
  setToken,
} from "../../store/Auth";

export default function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("userData") || "null");
    if (result?.user?._id) {
      dispatch(setUser(result.user));
      dispatch(setToken(result.token));
      dispatch(setLoginStatus(true));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch]);
}
