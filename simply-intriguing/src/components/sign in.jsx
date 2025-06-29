import React from "react";
import unlock from "../assets/unlock.mp3"; 
const SignIn = () => {
    const handleSignIn = (e) => {
    e.preventDefault();
    const audio = new Audio(unlock); 
    audio.play();
    console.log("Treasure unlocked!");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      
      <div className="bg-gradient-to-br from-maroon to-black border border-maroon/60 backdrop-blur-md shadow-xl rounded-2xl p-10 w-full max-w-md text-white space-y-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-maroon drop-shadow-lg">
          🔐 Welcome Back, Intriguer!
        </h2>

         <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-black/70 border border-maroon text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-maroon"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-black/70 border border-maroon text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-maroon"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-maroon hover:bg-red-800 py-2 rounded-xl font-bold tracking-wide glow transition-all duration-300 hover:scale-105"
          >
           🪙Unlock🪙
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          Join the Intrigue <span className="text-maroon underline cursor-pointer hover:text-red-800">Register here</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
