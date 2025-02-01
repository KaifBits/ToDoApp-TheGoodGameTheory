import React from 'react'
import { useState } from 'react';
import SignupView from '../../views/SignupView';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';

const SignupContainer = () => {
    const[username,setUsername]=useState<string>("");
    const[password,setPassword]=useState<string>("");
    const[email,setEmail]=useState<string>("");
    const[success,setSuccess]=useState<string>("");
    const handleUsername=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }
    const handlePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(e.target.value)
  }
  const handleEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
}
const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault(); // Prevent default form submission

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        setSuccess("user registered");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+errorMessage)
        //
      });
}

  return (
    <SignupView username={username} email={email} password={password} success={success} handleUsername={handleUsername} handleEmail={handleEmail} handlePassword={handlePassword} onSubmit={handleSubmit}  />
  )
}

export default SignupContainer