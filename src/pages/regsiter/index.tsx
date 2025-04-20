import React from "react";
import { Icon } from "@iconify-icon/react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm w-full text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">SIGN UP</h2>
        <p className="text-center mb-6 text-gray-400">Create your account and get started!</p>

        <form>
          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md bg-gray-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
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

          {/* Sign Up Button */}
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full p-3 bg-green-600 rounded-md text-white font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Already have an account? Login Link */}
          <div className="text-center text-sm mb-6">
            <p className="text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
              </a>
            </p>
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

export default SignUp;
