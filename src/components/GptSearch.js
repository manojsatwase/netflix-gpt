import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';


const GptSearch = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  ) 
}

export default GptSearch;