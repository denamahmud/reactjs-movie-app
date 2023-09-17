

import React, { useState } from 'react'
import Search from '../components/Search';
import axios from 'axios';
import {options} from '../components/Options'



function Movies() {
    const [movies, setMovies] = useState([])
    const [num, setNum] = useState(5)
    const [hide, setHide] = useState(false)
   
    const seeMore = () => {
        setNum(num * 2)
    }
  
    
    const [stext, setstext] = useState("");

    const showChange = (event) => {
    
      setstext(event.target.value.toLowerCase()); 
   
    };
    
    const show = (e) => {
      e.preventDefault();
      axios.get(`https://api.themoviedb.org/3/search/multi?query=${stext}&include_adult=false&language=en-US&page=1`, options)
      .then(response => setMovies(response.data.results))
 
     
  
    };
 
 
     
  return (
    <div className='bg-blackdark justify-center '>
       <Search stext={stext} showChange={showChange} show={show}/>

       <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-20 px-10 '>
   
             {
                movies.length ? movies.slice(0, num).map(item => {
                      return(
                        <a href={`/details/${item.id}`} className='mb-10 shadowStyle p-5 rounded-md'> 
                          <img className='w-96 h-96 object-cover rounded-md' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                          <h2 className='text-lightblue text-lg font-bold pt-2'>Title : {item.title}</h2> 
                          <p className=' my-5 text-[#324771]'>Votage average : {item.vote_average}</p> 
                          <p className='text-[#324771]'>{item.release_date}</p>
                      </a>
                       
                      )
                    })  : <div className='text-white md:py-40 py-20 col-span-3 text-center md:text-5xl text-xl'>Search for your movie ..</div>
              }
    
          
       </div>
       {
        !hide && num < movies.length ? <div className='flex justify-center w-full '>
                    <button className='p-5 w-32 rounded-2xl text-lightblue' onClick={seeMore}>See More</button>
                </div> : ''

              
       }
     
       
    </div>
  )

    
    }
    

export default Movies