import React  from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({mivieId}) => {
    const tailerVideo = useSelector(state=> state?.movies?.trailerVideo);

    useMovieTrailer(mivieId);
    if(!tailerVideo?.key) return "Loading...";

  return (
    <div className='w-scree'>
        <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${tailerVideo?.key}?&autoplay=1&mute=1`} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
    </iframe>
    </div>
  )
}

export default VideoBackground;