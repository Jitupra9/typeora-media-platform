import React, { memo, useState, useEffect } from "react";
import { Mail, CheckCheck, Lock, EyeOff, Eye, Pencil } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
function Signup(props) {
  const [isloading, setisloading] = useState(false);
  const [passEye, setpassEye] = useState(false);
  const [isotp, setisotp] = useState(false);
  const [datas, setdatas] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    location: "",
    email: "",
    otp: "",
    password: "",
    Mailverifyed: false,
    allfillup: false,
  });
  const SERVER_URL = process.env.REACT_APP_API_URL;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdatas((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const changeProgress = () => {
    setdatas((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      phoneNo: "",
      location: "",
      otp: "",
      password: "",
      Mailverifyed: false,
      allfillup: false,
    }));
    setisotp(false);
  };
  const Mailsend = async () => {
    if (datas.email.length <= 0) {
      return toast.error("Enter the velid mail");
    }
    try {
      setisloading(true);
      const result = await axios.post(`${SERVER_URL}/sendOTP`, {
        email: datas.email,
      });
      if (result) {
        setisotp(true);
        return toast.success("OTP sended successfully");
      }
    } catch (err) {
      if (err.response?.data?.code === 11000) {
        return toast.error(err.response?.data?.message);
      }

      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("somthing is wrong try later");
      }
      console.log(err);
    } finally {
      setisloading(false);
    }
    return;
  };

  const Mailverify = async () => {
    try {
      const res = await axios.post(`${SERVER_URL}/veifyEmail`, {
        email: datas.email,
        otp: datas.otp,
      });
      if (res.data?.success) {
        toast.success("Email verifyed successfully");
        return setdatas((prev) => ({
          ...prev,
          Mailverifyed: true,
        }));
      }
    } catch (err) {
      if (err.response?.data) {
        return toast.error(err.response?.data.message);
      } else {
        console.log("somthing is wrong");
      }
    }
    return;
  };
  useEffect(() => {
    console.log("Updated datas:", datas);
  }, [datas]);

  const isFillupData = (e) => {
    e.preventDefault();

    if (datas.firstName.trim() === "") {
      return toast.error("Please enter your first name");
    }

    if (datas.lastName.trim() === "") {
      return toast.error("Please enter your last name");
    }

    if (datas.phoneNo.trim() === "") {
      return toast.error("Please enter your phone number");
    }

    if (datas.location.trim() === "") {
      return toast.error("Please enter your location");
    }
    setdatas((prev) => ({
      ...prev,
      allfillup: true,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!datas.Mailverifyed) {
      return toast.error("Email not verified");
    }
    try {
      console.log("submited data is ", datas);
      const res = await axios.post(`${SERVER_URL}/signup`, {
        userEmail: datas.email,
        userPassword: datas.password,
        userFirstname: datas.firstName,
        userLastName: datas.lastName,
        userphoneNo: datas.phoneNo,
        userlocation: datas.location,
      });
      if (res.data.success) {
        toast.success("signup successfully");
        setTimeout(() => {
          props.setisactive("login");
        }, 500);
      }
    } catch (err) {
      console.log(err);
      if (err.response?.data) {
        toast.error(err.response?.data.message);
      } else {
        console.log("somthing is wrong");
      }
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className=" w-full  border-2 my-5 px-3 py-2 gap-2 rounded-xl flex items-center ">
        <Mail className=" w-4 h-4" />
        <div
          className={`text-xs text-left border-l-2 px-3 flex-1 ${
            isotp === true ? "pointer-events-none" : ""
          }`}
        >
          <p className=" font-semibold text-gray-700">Email Address</p>
          <input
            type="email"
            className=" bg-transparent outline-none font-bold text-black dark:text-gray-400 mt-1"
            placeholder="xyzabc@gmail.com"
            name="email"
            onChange={handlechange}
            value={datas.email}
          />
        </div>

        {isotp ? (
          <Pencil onClick={changeProgress} className="w-4 h-4 cursor-pointer" />
        ) : (
          <CheckCheck className=" w-4 h-4 text-white rounded-full p-1 bg-gray-600" />
        )}
      </div>

      {datas.Mailverifyed && !datas.allfillup ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="w-full h-full sm:w-[90%] sm:h-auto md:w-[60%] lg:w-[50%] bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 transition-all duration-300 ease-in-out">
            <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Basic Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-2 text-left">
              <div className="">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Abc"
                  className="w-full py-2 px-3 bg-transparent border-b-2 border-gray-400 focus:border-blue-500 text-sm text-gray-800 dark:text-gray-100 outline-none transition-all"
                  onChange={handlechange}
                  required
                  value={datas.firstName}
                />
              </div>

              <div className="">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Xyz"
                  className="w-full py-2 px-3 bg-transparent border-b-2 border-gray-400 focus:border-blue-500 text-sm text-gray-800 dark:text-gray-100 outline-none transition-all"
                  onChange={handlechange}
                  value={datas.lastName}
                />
              </div>

              <div className="">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phoneNo"
                  placeholder="9876543210"
                  className="w-full py-2 px-3 bg-transparent border-b-2 border-gray-400 focus:border-blue-500 text-sm text-gray-800 dark:text-gray-100 outline-none transition-all"
                  onChange={handlechange}
                  value={datas.phoneNo}
                />
              </div>

              <div className="">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Berhampur, Odisha"
                  className="w-full py-2 px-3 bg-transparent border-b-2 border-gray-400 focus:border-blue-500 text-sm text-gray-800 dark:text-gray-100 outline-none transition-all"
                  onChange={handlechange}
                  value={datas.location}
                />
              </div>
            </div>

            <div className="mt-8 text-right">
              <button
                onClick={isFillupData}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {datas.Mailverifyed ? (
        <div className="w-full border-2 my-5 px-3 py-2 gap-2 rounded-xl flex items-center">
          <Lock className="w-4 h-4" />
          <div className="text-xs text-left border-l-2 px-3 flex-1">
            <label className="block font-semibold text-gray-700">
              Enter the Password
            </label>
            <input
              type={passEye === true ? "text" : "password"}
              className="outline-none font-bold text-black mt-1 w-full bg-transparent"
              placeholder="********"
              name="password"
              value={datas.password}
              onChange={handlechange}
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
      ) : (
        <div
          className={` relative w-full  border-2 my-5 px-3 py-2 gap-2 rounded-xl flex items-center ${
            isotp !== true ? " invisible" : " visible"
          }`}
        >
          <Lock className="w-4 h-4" />
          <div className="text-xs text-left border-l-2 px-3 flex-1">
            <label className="block font-semibold text-gray-700">
              Enter the Otp
            </label>
            <input
              type="text"
              className="outline-none font-bold text-black mt-1 w-full bg-transparent"
              placeholder="********"
              name="otp"
              onChange={handlechange}
              value={datas.otp}
              required
            />
          </div>
          <div
            onClick={Mailverify}
            className={`cursor-pointer absolute right-2 text-[8px] font-semibold  text-white px-3  shadow-md  rounded-full
            ${
              datas.Mailverifyed
                ? "bg-green-500 shadow-green-200"
                : "bg-blue-600 shadow-blue-200"
            }
            `}
          >
            {datas.Mailverifyed ? "Veifyed" : "Verify"}
          </div>
        </div>
      )}
      {isotp === false ? (
        <button
          onClick={Mailsend}
          className={` ${
            isloading !== true
              ? "bg-blue-700 "
              : " bg-blue-300 pointer-events-none"
          } py-3 w-full text-sm text-opacity-90 rounded-xl text-white rounded-x flex justify-center items-center gap-4`}
        >
          {isloading && (
            <div className=" w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          Continue
        </button>
      ) : (
        <button
          className={` ${
            isloading !== true
              ? "bg-blue-700 "
              : " bg-blue-300 pointer-events-none"
          } py-3 w-full text-sm text-opacity-90 rounded-xl text-white rounded-x flex items-center justify-center gap-4`}
        >
          {isloading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          signup
        </button>
      )}
    </form>
  );
}

export default memo(Signup);
