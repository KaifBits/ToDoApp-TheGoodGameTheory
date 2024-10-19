import React from 'react'
import { useState } from 'react';
import SigninView from '../../views/SigninView';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const SigninContainer = () => {
  const navigate = useNavigate();
  const[email,setEmail]=useState<string>("");
  const[password,setPassword]=useState<string>("");
  const[error,setError]=useState<string>("");
  const handleEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value)
  }
  const handlePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
}

const handleSubmit=()=>{
  
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/home");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"---"+errorMessage);
  });


}
  return (
    <SigninView email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} onSubmit={handleSubmit} error={error}/>
  )
}

export default SigninContainer