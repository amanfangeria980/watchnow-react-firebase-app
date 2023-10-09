import { useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {UserAuth} from "../context/AuthContext";
import {db} from '../firebase';
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';

const MovieCard=({movie})=>{
    const [like,setLike]=useState(false);
    return(
        <>
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 text-white">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
                    <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{movie?.title}</p>
                    <p className="absolute top-4 left-4 text-gray-300">
                        {like? <FaHeart/>: <FaRegHeart/>}
                    </p>
                </div>
              </div>
          )
        </>
    )
}

export default MovieCard;