import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captaindata, setcaptaindata] = useState({});
  const handelsubmit = (e) => {
    e.preventDefault();
    setcaptaindata({
      email: email,
      password: password,
    });

    setemail("");
    setpassword("");
  };

  return (
    <div className="p-4 md:p-8 min-h-screen flex flex-col justify-between max-w-xl mx-auto">
      <div>
        <img
          className="w-16 md:w-20 mb-8 md:mb-12"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={handelsubmit} className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">
              What's your email
            </h3>
            <input
              className="bg-[#f8f8f8] rounded-lg px-4 py-3 border border-gray-300 w-full text-base md:text-lg placeholder:text-gray-500 focus:border-black focus:outline-none"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Enter Password
            </h3>
            <input
              className="bg-[#f8f8f8] rounded-lg px-4 py-3 border border-gray-300 w-full text-base md:text-lg placeholder:text-gray-500 focus:border-black focus:outline-none"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <button className="bg-black text-white font-semibold rounded-lg px-4 py-3 w-full text-base md:text-lg hover:bg-gray-900">
              Login
            </button>
            <p className="text-center mt-4 text-gray-600">
              Join a fleet?{" "}
              <Link
                to="/signup"
                className="text-black font-medium hover:underline"
              >
                Register as a Captain
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <Link
          to="/login"
          className="bg-[#276EF1] flex items-center justify-center text-white font-semibold rounded-lg px-4 py-3 w-full text-base md:text-lg hover:bg-blue-600"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
