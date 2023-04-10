import React, { useEffect ,useState}  from 'react'
import "./home.scss"
import axios from 'axios'
import Banner from './banner';
import Header from '../header/header';
const imgurl="https://image.tmdb.org/t/p/w500";
const url="https://api.themoviedb.org/3/";
// const langpage="&language=hi&region=IN";
const langpage="&language=en-US";
const key= "api_key=56d189d18ee6e2ed102eb8ffc7cbf830";


const Card=({img, movie_name})=>(    
    <div className='card'>
        <figure className='fig'>
            <div className='centretext'>
                <img src={img} alt="cover" height={300} width={200}/>
            </div>
            {/* <h3 className='figcap'>{movie_name}</h3> */}
        </figure>
    </div>
)
const Row = ({title, arr=[]})=>(
    <div className='row'>
        <h2>{title}</h2>
        <div>
            {
            arr.map((item, index)=>(
                <Card key={index} img={`${imgurl}/${item.poster_path}`} movie_name={item.title}/>
            ))}
            {/* {console.log(arr[0].title)} */}
        </div>
    </div>
)
const Home = () => {
    const [popular_movies, set_popular_movies]=useState([]);
    const [upcoming_movies, set_upcoming_movies]=useState([]);
    const [top_movies, set_top_movies]=useState([]);
    const [popular_tv_show, set_popular_tv_show]=useState([]);  
    useEffect(()=>{
        const fetchdata = async()=>{
            const {data:{results}} = await axios.get(`${url}movie/popular?${key}${langpage}`);
            set_popular_movies(results);
            // console.log(popular_movies)
            let {data} = await axios.get(`${url}movie/upcoming?${key}${langpage}`);
            set_upcoming_movies(data.results)
            // console.log(data.results[5]);
            data= await axios.get(`${url}movie/top_rated?${key}${langpage}`);
            set_top_movies(data.data.results);
            // console.log(data.data.results);
            data= await axios.get(`${url}tv/popular?${key}${langpage}`)
            set_popular_tv_show(data.data.results);
            // console.log(popularmovies);
            // console.log(toprated);
            // console.log(populartvshows);
        };
        fetchdata()
    }, [])
    

  return (
    <section className="home">
        <Header/>
        {/* <div className="banner"></div> */}
        <Banner />
        <Row title={"Popular Movies"} arr={popular_movies}/>
        <Row title={"Upcoming"} arr={upcoming_movies}/>
        <Row title={"Most Rated"} arr={top_movies}/>
        <Row title={"Popular TV Shows"} arr={popular_tv_show}/> 
    </section>
  )
}

export default Home
// https://api.themoviedb.org/3/movie/popular?api_key=56d189d18ee6e2ed102eb8ffc7cbf830&language=en-US&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=56d189d18ee6e2ed102eb8ffc7cbf830&language=en-US&page=1