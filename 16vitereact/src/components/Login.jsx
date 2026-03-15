import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const {setUser} = useContext(UserContext)

  const handlesubmit = (e) => {
    e.preventDefault()
    setUser(username,password)
  };
  return (
    <div>
      <h2 className="text-4xl ">Login</h2>
      <input
        value={username}
        onChange={(e) => setusername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="text"
        placeholder="password" 
      />
      <button onClick={handlesubmit}>submit</button>
    </div>
  );
};

export default Login;

// Login -> setuser(UserContextProvider) -> Profile