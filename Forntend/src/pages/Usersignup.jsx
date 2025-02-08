import React, { useState } from "react";
import { Link } from "react-router-dom";

const Usersignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userdata, setuserdata] = useState({});

  const handelsubmit = (e) => {
    e.preventDefault();

    setuserdata({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });

    console.log(userdata)
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <div className="p-4 md:p-8 min-h-screen flex flex-col justify-between max-w-xl mx-auto">
        <div>
          <img
            className="w-16 md:w-20 mb-8 md:mb-12"
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
            alt=""
          />
          <form onSubmit={handelsubmit} className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">What's your name</h3>
              <div className="flex gap-4">
                <input
                  className="bg-[#f8f8f8] w-1/2 rounded-lg px-4 py-3 border border-gray-300 text-base md:text-lg placeholder:text-gray-500 focus:border-black focus:outline-none"
                  required
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
                <input
                  className="bg-[#f8f8f8] w-1/2 rounded-lg px-4 py-3 border border-gray-300 text-base md:text-lg placeholder:text-gray-500 focus:border-black focus:outline-none"
                  required
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">What's your email</h3>
              <input
                className="bg-[#f8f8f8] rounded-lg px-4 py-3 border border-gray-300 w-full text-base md:text-lg placeholder:text-gray-500 focus:border-black focus:outline-none"
                required
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Enter Password</h3>
              <input
                className="bg-[#f8f8f8] rounded-lg px-4 py-3 border border-gray-300 w-full text-base md:text-lg placeholder:text-gray-500 focus:border-black focus:outline-none"
                required
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div>
              <button className="bg-black text-white font-semibold rounded-lg px-4 py-3 w-full text-base md:text-lg hover:bg-gray-900">
                Create Account
              </button>
              <p className="text-center mt-4 text-gray-600">
                Already have account?{" "}
                <Link to="/login" className="text-black font-medium hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <p className="text-xs text-gray-500 leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline cursor-pointer">Google Privacy Policy</span> and{" "}
            <span className="underline cursor-pointer">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usersignup;