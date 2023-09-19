import {useEffect} from 'react';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/  constants';

const useMovieTrailer = (mivieId) => {
    const dispatch = useDispatch();
     // fetch trailer video && updating the store with tailer video here

     const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${mivieId}/videos?language=en-US`,API_OPTIONS);
        const json = await data.json();
        const filterData = json?.results.filter(video=>video.type === "Trailer");
        const trailer = filterData.length ? filterData?.[0] :json?.results[0];
        dispatch(addTrailerVideo(trailer));
       }  
   
       useEffect(()=>{
           getMovieVideos();
       },[]);
   
  return;
}

export default useMovieTrailer;