import { useState,useEffect } from "react";
import {UserAuth} from "../context/AuthContext"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {db} from "../firebase";
import { updateDoc, doc,onSnapshot} from "firebase/firestore";

const SavedShows = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const {user}=UserAuth();

  const[movies,setMovies]=useState([]);

  useEffect(()=>{
    onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{setMovies(doc.data()?.savedShows);
    })
  },[user?.email])

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <div key={id.toString()} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 text-white">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <FaChevronRight
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default SavedShows;
