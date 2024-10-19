import React from 'react'
import FormInput from '../../components/base/FormInput';
import logo from '../../assets/Todologo.png';
import FormButton from '../../components/base/FormButton';
import { Link } from 'react-router-dom';

type SigninViewProps = {
  email:string;
  password:string;
  error:string;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
 
};
const LoginView = ({email,password,error,handleEmail,handlePassword,onSubmit}:SigninViewProps) => {
   



  return (
    <div className='w-full flex flex-col items-center'> <img src={logo} alt="logo" className="my-5" />
    <div className='w-96 h-auto py-10  flex flex-col justify-center items-center m-auto bg-white space-y-10 rounded-lg shadow-lg '>
       <p className='text-3xl font-bold text-black'>Sign In</p>
      <div className='flex space-x-2 w-80  '>
        <FormInput type="email" placeholder='enter your username' text={email} onChange={handleEmail} />
        <p className='text-lg font-medium'>Email Id</p>
        </div>
        <div className='flex space-x-2 w-80 '>
        <FormInput type="password" placeholder='enter your passowrd' text={password} onChange={handlePassword} />
        <p className='text-lg font-medium'>Passoword</p>
        </div>
        <p className='text-blue-500 font-mono w-full pl-10'>Forgot Passowrd?</p>
        <p className='text-black font-normal w-full pl-10'>new User? <Link to="/signup">signup</Link></p>
        <p className='text-red-500'>{error}</p>
        <FormButton type='submit'variant='link' buttonName="Sign in" fontSize="text-lg" onSubmit={onSubmit} />
    </div>
    </div>
  )
}

export default LoginView ;