import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const {movieNames,movieResults} = useSelector(state=>state.gpt);
  if(!movieNames) return null;

  return (
    <div className="bg-black text-white p-4 m-4"> 
        {
          movieNames.map((movieName,index)=> <MovieList key={index} title={movieName} movies={movieResults[index]} />)
        }
    </div>
  )
}

export default GptMovieSuggestions;