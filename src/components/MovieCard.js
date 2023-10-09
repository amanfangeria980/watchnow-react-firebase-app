import { useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {UserAuth} from "../context/AuthContext";
import {db} from '../firebase';
import { arrayUnion,arrayRemove,doc,updateDoc } from 'firebase/firestore';

const MovieCard=({movie})=>{
    const [like,setLike]=useState(false);
    const [saved,setSaved]=useState(false);
    const {user}=UserAuth();
    // grabbing the user email from db
    const movieId=doc(db,'users',`${user?.email}`);

    const savedShow = async () => {
      if (user?.email) {
        if (like) {
          // Remove the movie from savedShows
          setLike(false);
          await updateDoc(movieId, {
            savedShows: arrayRemove({
              id: movie.id,
              title: movie.title,
              img: movie.backdrop_path,
            }),
          });
        } else {
          // Add the movie to savedShows
          setLike(true);
          setSaved(true);
          await updateDoc(movieId, {
            savedShows: arrayUnion({
              id: movie.id,
              title: movie.title,
              img: movie.backdrop_path,
            }),
          });
        }
      } else {
        alert('Please login to save a movie');
      }
    };

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
                    <p className="absolute top-4 left-4 text-gray-300" onClick={savedShow}>
                        {like? <FaHeart/>: <FaRegHeart/>}
                    </p>
                </div>
              </div>
          )
        </>
    )
}

export default MovieCard;