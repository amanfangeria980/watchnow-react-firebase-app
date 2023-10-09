import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RowComponent = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

 const slideLeft=()=>{
    var slider=document.getElementById('slider');
    slider.scrollLeft=slider.scrollLeft-500;
 }

 const slideRight=()=>{
    var slider=document.getElementById('slider');
    slider.scrollLeft=slider.scrollLeft+500;
 }


  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0" size={40} onClick={slideLeft}/>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
        <FaChevronRight className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0" size={40} onClick={slideRight}/>
      </div>
    </>
  );
};
export default RowComponent;
