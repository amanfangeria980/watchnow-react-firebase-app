import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const RowComponent = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);


  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id}/>
          ))}
        </div>
      </div>
    </>
  );
};
export default RowComponent;
