import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(state=>state.user);

  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between bg-black'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt='logo' />
      {
        user && (
          <div className='flex'>
          <img className='w-8 h-8 mt-6 mx-2' alt='userIcon' src={user?.photoURL} />
          <button onClick={handleSignOut} className='cursor-pointer font-bold text-white'>(Sign Out)</button>
        </div>
        )
      }
       </div>
  )
}

export default Header;