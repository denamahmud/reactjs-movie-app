 
import React, {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import Header from '../components/Header';
import axios from 'axios';
import { options } from '../components/Options'
import { Seemore } from '../components/Seemore';

function SearchMovies() {
    
    const {name} = useParams()
    const [dataSearch, setDataSearch] = useState([])
 
    const searchMovies = () => {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${name.toLocaleLowerCase()}&include_adult=false&language=en-US&page=1`, options) 
      .then(response => setDataSearch(response.data.results))
       
    }

    const [num, setNum] = useState(5)
    const [hide, setHide] = useState(false)
   
    const seeMore = () => {
        setNum(num * 2)
    }
    useEffect(() => { 
        searchMovies()
          
    }, [])


 
  return ( 
       <div className='bg-blackdark'>
        <Header/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-20 px-5 md:pt-80 pt-20 font2 '> 
       
       <div className=' md:text-5xl text-2xl text-center first-letter:uppercase md:mt-60 mt-40 font-extrabold md:pt-10 pt-6 md:h-32 h-20 md:w-80 w-40 text-lightblue mx-auto md:-rotate-90 -rotate-0 rounded-md shadowStyle'>{name}</div>
        {
            dataSearch.slice(0, num).map(item => {
                return(
                <Link to={`/details/${item.id}`} 
                className=' bg-transparent shadowStyle md:first-of-type:mt-5 first-of-type:mt-20 md:m-5 m-5 p-5 rounded-md'> 
                    <img className='w-96 h-96 object-cover rounded-md' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
                    <h2 className=' text-lightblue text-lg font-bold pt-2'>Title : {item.title}</h2> 
                    <p className=' my-5 text-[#324771]'>Votage average : {item.vote_average}</p> 
                    <p className='text-[#324771]'>{item.release_date}</p>
                </Link>
                )
            })
        } 
  

    

 </div>
 

        <Seemore hide={hide} num={num} movies={dataSearch} seeMore={seeMore}/>
 
       </div>
    
  ) 
}


export default SearchMovies