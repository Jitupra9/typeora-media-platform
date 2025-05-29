import React, { useState, useContext } from "react";
import { Mail, CheckCheck, Lock, EyeOff, Eye } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IsAuthnticate } from "../../context/Auth/IsAuth";

function Login() {
  const SERVER_URL = process.env.REACT_APP_API_URL;
  const [passEye, setpassEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { setAuth } = useContext(IsAuthnticate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${SERVER_URL}/login`, {
        userEmail: data.email,
        userPassword: data.password,
      });
      console.log(res.data);
      if (res.data?.success) {
        setAuth((prev) => ({
          ...prev,
          islogined: true,
          user: res.data?.userData?.user,
        }));
        localStorage.setItem("userData", JSON.stringify(res?.data?.userData));
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error(res.data?.message || "Login failed.");
      }
    } catch (err) {
      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
        console.log(err.response.data);
      } else {
        toast.error("server is absent");
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full border-2 my-5 px-3 py-2 gap-2 rounded-xl flex items-center">
        <Mail className="w-4 h-4" />
        <div className="text-xs text-left border-l-2 px-3 flex-1">
          <label className="block font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="outline-none dark:text-white dark:bg-transparent font-bold text-black mt-1 w-full bg-transparent"
            placeholder="xyzabc@gmail.com"
            name="email"
            value={data.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
        <CheckCheck className="w-4 h-4 bg-gray-600 text-white rounded-full p-1" />
      </div>

      <div className="w-full border-2 my-5 px-3 py-2 gap-2 rounded-xl flex items-center">
        <Lock className="w-4 h-4" />
        <div className="text-xs text-left border-l-2 px-3 flex-1">
          <label className="block font-semibold text-gray-700">
            Enter the Password
          </label>
          <input
            type={passEye === true ? "text" : "password"}
            className="outline-none font-bold dark:text-white dark:bg-transparent text-black mt-1 w-full bg-transparent"
            placeholder="********"
            name="password"
            value={data.password}
            onChange={handleChange}
            disabled={loading}
            autoComplete="none"
            required
          />
        </div>
        {passEye === true ? (
          <Eye
            onClick={() => {
              setpassEye(false);
            }}
            className="w-7 h-7 cursor-pointer text-gray-700 rounded-full p-1"
          />
        ) : (
          <EyeOff
            onClick={() => {
              setpassEye(true);
            }}
            className="w-7 h-7 cursor-pointer text-gray-700 rounded-full p-1"
          />
        )}
      </div>

      <button
        type="submit"
        className={`mt-2 py-3 outline-none w-full text-sm text-white rounded-xl flex items-center justify-center gap-4 ${
          loading
            ? "bg-blue-300 pointer-events-none"
            : "bg-blue-700 hover:bg-blue-800 transition"
        }`}
      >
        {loading && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
        {loading ? "Logging in..." : "Continue"}
      </button>
    </form>
  );
}

export default Login;
