import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import AuthDetail from "./AuthDetail";

const SignIn = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    
    const signIn = (e) => { 
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
          console.log(userCredential);
      })
      .catch((error) => {
          console.log(error)
      })
    };

    return (
    <div className="sign-in-container">
      <meta http-equiv="Permissions-Policy" content="interest-cohort=()"></meta>
      <form onSubmit={signIn}>
        <h1>Login In to your account</h1>
        <input
          type={email}
          placeholder="Enter your email"
          value={email}
          onChange = {(e)=> setEmail (e.target.value)}
        ></input>
        <input
          type={password}
          placeholder="Enter your password"
          value={password} onChange = {(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
      <AuthDetail/>
    </div>
  );
};

export default SignIn;
