import React from 'react'
import FormInput from '../../components/base/FormInput';
import home from '../../assets/home.png';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import forr from '../../assets/for.png';
import five from '../../assets/five.png';
import six from '../../assets/six.png';
import logo from '../../assets/logo.png';
import background from '../../assets/background.png';
import { FaHome, FaGamepad, FaTv, FaChartLine, FaGift, FaDollarSign } from "react-icons/fa";

import FormButton from '../../components/base/FormButton';
import { Link } from 'react-router-dom';




type SignupViewProps = {
  username: string;
  email:string;
  password:string;
  success:string;
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

 
};

const SignupView = ({username,email,password,success,handleUsername,handleEmail,handlePassword,onSubmit}:SignupViewProps) => {
  
  return (
    <div
      className="w-full h-screen flex  items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${background})` }}
    >
        <div className="h-screen w-64 backdrop-blur-sm text-white flex flex-col justify-center items-center  shadow-lg">
      {/* Top Section */}
      <img
      src={logo}
      alt="Home Icon"
      className="w-48 h-44 object-contain"
    />
      <div className="flex flex-col items-center space-y-6 mt-6">
        {/* Sign Up Button */}
        <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full">
          SIGN UP
        </button>
        {/* Log In Button */}
        <button className="border-2 border-white py-2 px-6 rounded-full text-white font-bold">
          LOG IN
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-5 space-y-1 pl-8">
      
      <Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={home}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={one}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={two}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={three}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={forr}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={five}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={six}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col items-center mb-6">
        <p className="text-sm">© 2025 The Fortune App</p>
      </div>
    </div>
      
    
    <div className='w-1/4 h-auto py-10 flex flex-col justify-center items-center m-auto bg-opacity-10 bg-black rounded-lg shadow-lg border border-gray-700 p-6 space-y-6'>
      <h2 className='text-3xl font-bold text-white'>Sign Up</h2>
      <p className='text-white'>🕒start playing less than 1 min</p>
      <form className='w-full flex flex-col space-y-4' onSubmit={onSubmit}>
      <FormInput type='text' placeholder='👤Enter your Name' text={username} onChange={handleUsername} />
     
        <FormInput type='email' placeholder='📧Enter your email' text={email} onChange={handleEmail} />
        <FormInput type='password' placeholder='🔑Enter your password' text={password} onChange={handlePassword} />
        <p className='text-blue-500 font-mono w-full pl-10'>Forgot Password?</p>
       
        <p className=' font-normal w-full pl-10 text-yellow-400'>Already User? <Link to="/">signin</Link></p>
        <FormButton type='submit' buttonName='Sign Up' fontSize='text-2xl' variant='success' />
      </form>
    </div>
    </div>
    
  )
}

export default SignupView ;