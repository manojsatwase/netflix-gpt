import React, { useState } from 'react'

const Form = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <form className='absolute p-12 bg-black w-3/12 mx-auto left-0 right-0 my-36 text-white bg-opacity-80'>
        <h1 className='font-bold text-xl py-4'> {isSignInForm ? 'Sign In' :'Sign Up'}</h1>
        <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700 text-white rounded' />
        <input type='password' placeholder='Password' className='p-2 my-2 w-full  bg-gray-700 text-white rounded' />
       {!isSignInForm && (
         <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 text-white rounded' />
       )}
        <button className='p-4 my-6 bg-red-700 w-full' type='button'>{isSignInForm ? 'Sign In' :'Sign Up'}</button>
        <p className='text-gray-500'><span onClick={toggleSignInForm} className='text-white cursor-pointer'>{isSignInForm ? 'New to Netflix?  Sign up now.':'Already register? Sign In now.'}</span></p>
    </form>
  )
}

export default Form;