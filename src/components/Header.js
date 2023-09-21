import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/  constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  const showGptSearch = useSelector(state=>state.gpt.showGptSearch);

  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
   return () => unsubscribe();
  },[]);
  
  const handleGptSearchClick = ()=> {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = ({target:{value}})=> {
   dispatch(changeLanguage(value));
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between bg-black'>
      <img className='w-44' src={LOGO} alt='logo' />
      {
        user && (
          <div className='flex'>
           {showGptSearch && (
             <select onChange={handleLanguageChange} className='mt-5 mr-3 px-2 h-10 bg-red-700 text-white rounded-lg'>
             {
              SUPPORTED_LANGUAGES.map((option,index)=><option className='text-center' key={index} value={option.identifier}>{option.name}</option>)
             }
            </select>
           )}
          <button className='bg-purple-800 text-white rounded-lg mx-2 px-4 h-10 mt-5 text-sm cursor-pointer'
           onClick={handleGptSearchClick}
          >{showGptSearch ? "Home" :"GPT Search"}</button>
          <img className='w-8 h-8 mt-6 mx-2' alt='userIcon' src={user?.photoURL} />
          <button onClick={handleSignOut} className='cursor-pointer font-bold text-white'>(Sign Out)</button>
        </div>
        )
      }
       </div>
  )
}

export default Header;