import React, { useEffect, useState } from 'react'
import requests from "../Requests"
import axios from "axios"
const Main = () => {
    const [movies,setMovies]=useState([]);
    
    // choosing a random movie
    const movie=movies[Math.floor(Math.random()*movies.length)];


    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>setMovies(response.data.results));
    },[])
    // console.log(movies)
    // console.log(movie)

  return (
    <>

    </>
  )
}

export default Main