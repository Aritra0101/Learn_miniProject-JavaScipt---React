import React, {useState, useContext} from "react";
import UserContext from "../contexts/userContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({email, password});
    }
  return (
    <div>
      <h2>Login</h2>

      <input 
      type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      />
      <input 
      type="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      />
      <button onClick={handelSubmit}>Submit</button>   </div>
  );
}

export default Login