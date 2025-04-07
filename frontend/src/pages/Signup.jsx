import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  // state
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };
const  handleRegistation=()=>{
    if (!name) {
        setNameerr("Please Name is Requird");
    } 
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailerr("invalid Email");
      } 
    else if (!/^[a-zA-Z0-9!@#$%^&*.,/-_|+-]{6,15}$/.test(password)) {
        setPassworderr("Password must be at least 6 characters");
      } 
    else if (!phone) {
        setPhoneerr("Please phone is Requird");
      } else if(name  && email&& phone&& password){
  Navigate("/login")
  }
  
}
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex p-5 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-emerald-600">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-cyan-600 dark:text-white"
        >
         
      Login Portal
        </a>
        <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-3 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mt-3 dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block mb-2  text-sm font-medium  text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  onChange={handleName}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 ml-2 h-10  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                  placeholder="Enter Your Name"
                  required=""
                />
              </div>
              {nameerr && <p className="text-red-700 mt-3">{nameerr}</p>}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleEmail}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50  h-10  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              {emailerr && <p className="text-red-700 mt-3">{emailerr}</p>}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <input
                  onChange={handlePhone}
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter Your Number"
                  className="bg-gray-50  h-10  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                />
              </div>
              {phoneerr && <p className="text-red-700 mt-3">{phoneerr}</p>}
              <div  className="relative ">
                <label
                 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  password
                </label>
                <input
                  onChange={handlePassword}
                  value={password}
                  type={passwordShow ? "text" : "password"}
                  id="password"
                  placeholder="Enter Your Password"
                  className="bg-gray-50  h-10  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        
                />
                     {passwordShow ? (
                  <FaEye 
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute bottom-3 right-2"
                  ></FaEye>
                ) : (
                  <FaEyeSlash FaEyeSlash 
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute bottom-3 right-2"
                  ></FaEyeSlash>
                )}
              </div>
              {passworderr && <p className="text-red-700 mt-3">{passworderr}</p>}

              <Button 
              onClick={handleRegistation}
              className="bg-[#fc4141]  text-[20px] text-[#ffff] leading-[28px] font-semibold h-[60px] w-full mt-6 ">
                Create a account
              </Button>

              <p className="text-md text-black font-medium dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/Login"
                  href="javascript:void(0);"
                  className="text-green-700 hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
