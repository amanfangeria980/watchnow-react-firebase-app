import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";


const RowComponent = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id}/>
          ))}
        </div>
      </div>
    </>
  );
};
export default RowComponent;
