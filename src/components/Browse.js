import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
 const gpt = useSelector(state=>state.gpt)

  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {gpt?.showGptSearch ? <GptSearch/> : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )} 
     
    </div>
  )
}

export default Browse;