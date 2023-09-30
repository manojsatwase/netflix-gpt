import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { getRandomNumber } from '../utils/  constants';

const MainContainer = () => {
    const movies = useSelector(state=>state.movies?.nowPlayingMovies);
    if(!movies) return; // early return
    const randomNumber = getRandomNumber(1,movies?.length);
    const mainMovies = movies?.[randomNumber];

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={mainMovies?.original_title} overview={mainMovies?.overview}/>
        <VideoBackground mivieId={mainMovies?.id} />
    </div>
  )
}

export default MainContainer;