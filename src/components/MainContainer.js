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
    const {original_title,overview} = mainMovies;
    const id = mainMovies?.id;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground mivieId={id} />
    </div>
  )
}

export default MainContainer;