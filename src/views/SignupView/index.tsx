import React from 'react'
import FormInput from '../../components/base/FormInput';
import logo from '../../assets/Todologo.png';
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
  onSubmit: () => void;
 
};

const SignupView = ({username,email,password,success,handleUsername,handleEmail,handlePassword,onSubmit}:SignupViewProps) => {
  
  return (
    <div className='w-full flex flex-col items-center'> <img src={logo} alt="logo" className="my-5" />
    <div className='w-96 h-auto py-10  flex flex-col justify-center items-center m-auto bg-white space-y-10 rounded-lg shadow-lg '>
       <p className='text-3xl font-bold text-black'>Sign Up</p>
      <div className='flex space-x-2 w-80 '>
        <FormInput type="text" placeholder='enter your username' text={username} onChange={handleUsername} />
        <p className='text-lg font-medium'>Username</p>
        </div>
        <div className='flex space-x-2 w-80 '>
        <FormInput type="email" placeholder='kaif@gmail.com' text={email} onChange={handleEmail} />
        <p className='text-lg font-medium'>Email id</p>
        </div>
        <div className='flex space-x-2 w-80'>
        <FormInput type="password" placeholder='enter your passowrd' text={password} onChange={handlePassword} />
        <p className='text-lg font-medium'>Passoword</p>
        </div>
        <p className='text-blue-500 font-mono w-full pl-10'>Forgot Passowrd?</p>
        <p className='text-black font-normal w-full pl-10'>Already User? <Link to="/">signin</Link></p>
        <p className='text-green-500 font-normal'>{success}</p>
        <FormButton type='submit'variant='link' buttonName="Sign Up" fontSize="text-lg" onSubmit={onSubmit} />
    </div>
    </div>
  )
}

export default SignupView ;