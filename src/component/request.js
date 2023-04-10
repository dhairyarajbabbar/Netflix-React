// import React from 'react';
const apikey="56d189d18ee6e2ed102eb8ffc7cbf830";
const url="https://api.themoviedb.org/3/";
const requests={
    fetchtrending:`${url}/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchnetflixoriginal:`${url}/discover/tv?api_key=${apikey}&with_networks=213`
}
export default requests;