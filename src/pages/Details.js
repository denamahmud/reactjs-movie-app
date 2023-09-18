import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Upcoming from '../components/Upcoming';
import Toprated from '../components/Toprated'; 
import {options} from '../components/Options'
import axios from 'axios';

function Details() {
 

  const {id} = useParams()
  const [details, setDetails] = useState({})
  const [upcoming, setUpcoming] = useState([])
  const [toprated, setToprated] = useState([]) 
 
 
const getDetails = () => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)  
    .then(response => setDetails(response.data)) 
}

const getUpcoming = async() => {
  axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)  
  .then(response => setUpcoming(response.data.results))
 
}
const getPopular = async() => {
   axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)  
  .then(response => setToprated(response.data.results))
  
}

useEffect(() => { 
      getDetails()
      getUpcoming()
      getPopular()
}, [])
  
 

 
          
  return (
    <div className='bg-blackdark text-white p-10 font2 '> 
          <div className='flex sm:flex-row flex-col'>               
              <img className= 'object-cover rounded-md shadowStyle' src={'https://image.tmdb.org/t/p/w500/' + details.poster_path}/>

              <div className='flex flex-col sm:px-10 sm:ml-20 sm:w-4/5 '>
                  <h2 className='text-white font-semibold text-2xl py-5'>{details.title}</h2>
                  <div className='flex flex-col gap-1 '>
                    {
                        
                        details.genres && (
                          details.genres.map(item => {
                          
                            return(
                              <div className='bg-gradient-to-r from-[#4189CC] to-[#73BCFE]bg-green-400 w-40 p-2 rounded-md font-extrabold'>{item.name}</div>
                            )
                          })
                        )
                      }
                      <div className='text-white flex mt-5'>
                          <p className='text-lightblue mr-4'>IMDB ID : </p> {details.imdb_id}
                      </div>
                      <div className='text-white flex'> <p className='text-lightblue mr-4'>Release date : </p> {details.release_date}</div>
                      <div className='text-white flex'><p className='text-lightblue mr-4'>Status : </p> {details.status}</div>
                  </div>
                  
                  <div className='md:text-lg text-sm mt-5 text-justify'>{details.overview}</div>
                  <img className='w-96 h-60 object-cover rounded-md mt-40' src={'https://image.tmdb.org/t/p/w500/' + details.backdrop_path}/>
              </div>
      
          </div>



          <div className='mt-40'>
              <div>
                  <h3 className='text-white sm:ml-40 py-10 md:text-2xl text-lg'> Upcoming </h3>
                  <Upcoming upcoming={upcoming}/>
              </div>
              <div>
                  <h3 className='text-white sm:ml-40 py-10 md:text-2xl text-lg'> Top Rated </h3>
                  <Toprated toprated={toprated}/>
              </div>
          </div>
    </div>
  )
}
 


export default Details