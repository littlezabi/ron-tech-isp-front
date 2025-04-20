import React from "react";
import { Icon } from "@iconify-icon/react";
import { useContextProvider } from "../../store/context";




const Login = () => {
    const { modals, updateModals } = useContextProvider();
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm w-full text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">LOGIN</h2>
        <p className="text-center mb-6 text-gray-400">Please enter your login and password!</p>

        <form>
          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md bg-gray-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-gray-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-6">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full p-3 bg-green-600 rounded-md text-white font-semibold hover:bg-green-700 transition duration-300"
            >
              Login
            </button>

                      <div className="text-center text-sm mb-6 mt-5">
                          <p className="text-gray-400">
                              You don't have any account?{" "}
                              <button onClick={() => updateModals({ login: false, signup: true })} className="cursor-pointer text-blue-500 hover:underline">Register here</button>
                          </p>
                      </div>
          </div>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white">
            <Icon icon="mdi:facebook" style={{ fontSize: "1.5rem" }} />
          </a>
          <a href="#" className="text-white">
            <Icon icon="mdi:twitter" style={{ fontSize: "1.5rem" }} />
          </a>
          <a href="#" className="text-white">
            <Icon icon="mdi:google" style={{ fontSize: "1.5rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
