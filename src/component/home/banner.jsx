import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./banner.scss"
import requests from '../request'
const imgurl="https://image.tmdb.org/t/p/original/";
const Banner= () => {
    const [moviebackground, setmoviebackground]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(requests.fetchnetflixoriginal);
            setmoviebackground(
                request.data.results[Math.floor(Math.random()*(request.data.results.length-1))]
            );
            // console.log(request.data.results);
            return request;
        };
        fetchdata();
        // console.log(moviebackground);
    }, []);
    return (
        <div className="banner" style={{backgroundSize: "cover" , backgroundImage: `url("${imgurl}${moviebackground?.backdrop_path}")`}}>
        <div className="banneritems">
            <h1>{moviebackground.name}</h1>
                <div className="banner_buttons">
                    <button className='play_button'>Play</button>
                    <button className='play_button'>My List</button>
                </div>
            <h2>{moviebackground.overview}</h2>
        </div>
    </div>
  )
//   {console.log(moviebackground);}
}

export default Banner