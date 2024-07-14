import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(username,email,password)
    try {
      const response = await axios.post(
        "https://coursell.vercel.app/api/v1/users/createuser",{username,email,password}
      );
      const success = response.data;
      if (success) {
        console.log("user created successfully");
        alert("User created successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      alert("error creating user");
      setLoading(false)
    }
  };
  return (
    <section className="pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Create account <span class="text-yellow-600"></span>
          </div>
          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Create account now!!
          </div>
          <form class="flex flex-col gap-3" onSubmit={handleRegister}>
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="email"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div>
              <a class="text-sm text-yellow-600" href="#">
                Forgot your password?
              </a>
            </div>
            {loading ? (
              <button
                type="submit"
                class="bg-yellow-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Creating Account...
              </button>
            ) : (
              <button
                type="submit"
                class="bg-yellow-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Create Account
              </button>
            )}
          </form>
          <div class="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <a class="text-sm text-yellow-600" href="/login">
              Sign up for free!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
