import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/  constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
   
    const popularMovies = useSelector(state=>state.movies.popularMovies);

 // Fetch Data from TMDB API and update store
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json = await data.json();
    // why api calling two time we are getting results two times becouse of scrict mode
    dispatch(addPopularMovies(json?.results));
  }

  useEffect(()=>{
    // how do i make an api call => i wiil make an api call my function inside my useEffect
    // why we call insite useEffect => so that i can call it only once whenever my component render i will call only once
    !popularMovies && getPopularMovies();
  },[]);

  return;
}

export default usePopularMovies;