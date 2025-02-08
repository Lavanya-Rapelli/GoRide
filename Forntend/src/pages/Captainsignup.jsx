import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Captainsignup = () => {
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
      <div>
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
           src="https://pngimg.com/d/uber_PNG24.png"
            alt=""
          />
          <form onSubmit={handelsubmit}>
            <h3 className="text-lg font-medium mb-2">What's Our Captain's name</h3>
            <div className="flex gap-4 mb-6">
              <input
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
                required
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
                required
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>
            <h3 className="text-lg font-medium mb-2">What's Our Captain's email</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg ">
              Login
            </button>
            <p className="text-center">
              Already have account?{" "}
              <Link to="/captain-login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Captainsignup
