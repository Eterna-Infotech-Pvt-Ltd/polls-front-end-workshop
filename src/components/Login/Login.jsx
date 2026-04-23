import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoginHeader from './LoginHeader';

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="container d-flex justify-content-center align-items-center vh-100">

        <div className='card shadow login-card'>

            <LoginHeader/>


        </div>

    </div>
    
    </>
  )
}

export default Login