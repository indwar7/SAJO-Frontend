import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-[350px] bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
        {/* Back Arrow + Title */}
        <div className="flex items-center mb-6">
          <button className="text-white text-xl mr-2">←</button>
          <h1 className="text-white text-2xl font-bold mx-auto">LOGIN</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Email */}
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#3d3d3d] text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#3d3d3d] text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-gray-300 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#638ce6] text-white py-3 rounded-full font-semibold hover:bg-[#4a6fcc]()
