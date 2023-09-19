import React from 'react'
import Header from './Header';
import Form from './Form';
import { BG_URL } from '../utils/  constants';

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src= {BG_URL} alt='logo' />
    </div>
      <Form />
    </div>
  )
}

export default Login;