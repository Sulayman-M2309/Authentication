import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailerr, setEmailerr] = useState("");
  
    const [passworderr, setPassworderr] = useState("");
    const [passwordshow, setPasswordshow] = useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr("");
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderr("");
      };
      const handleLogin=()=>{
        if (!email) {
            setEmailerr("Email is required");
          } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailerr("Invalid Email");
          }
      
          if (!password) {
            setPassworderr("Password is required");
          }
        console.log(email,password);
      }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
       
        Login
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
              onChange={handleEmail}
                type="email"
          
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
            
              />
                   {emailerr && (
                  <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
                )}
            </div>
            <div>
              <label
           
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                      onChange={handlePassword}
                      type={passwordshow ? "text" : "password"}
                placeholder="Enter Your Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
                {passworderr && (
                  <p className=" text-red-500 text-xl font-normal">
                    {passworderr}
                  </p>
                )}
            </div>
            <div className=" items-center justify-between">
                 <Button 
                           onClick={handleLogin}
                           className="bg-[#fc4141]  text-[20px] text-[#ffff] leading-[28px] font-semibold h-[30px] w-full mt-6 ">
                             Login
                           </Button>
          
            </div>
            <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
          
            <p className="text-md text-black font-medium dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signup"
                  href="javascript:void(0);"
                  className="text-green-700 hover:underline ml-1"
                >
                  signup here
                </Link>
              </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Login