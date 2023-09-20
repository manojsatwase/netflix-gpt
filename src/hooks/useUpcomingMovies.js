import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/  constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

 // Fetch Data from TMDB API and update store
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
    const json = await data.json();
    // why api calling two time we are getting results two times becouse of scrict mode
    dispatch(addUpcomingMovies(json?.results));
  }

  useEffect(()=>{
    // how do i make an api call => i wiil make an api call my function inside my useEffect
    // why we call insite useEffect => so that i can call it only once whenever my component render i will call only once
    getUpcomingMovies();
  },[]);

  return;
}

export default useUpcomingMovies;
    