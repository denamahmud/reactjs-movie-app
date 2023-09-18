import { useEffect, useState } from 'react' 
import Header from '../components/Header';    
import {options} from '../components/Options'
import axios from 'axios';
import { Link } from 'react-router-dom';



function Home({ genres }) {
  
 
  return (
    <div className='bg-blackdark font2'>
        <Header/>
        <div className='heroSection'>
        
            <div className='text-lightblue bg-blackdark w-full h-full opacity-80 '>
              <div className='flex flex-col justify-center h-full items-center '>
                  <h1 className='text-white w-3/6 md:text-2xl text-md text-justify invisible sm:visible'>
                    Your Streaming Movie & TV Guide. Lorem ipsum is placeholder text commonly used in the graphic.
                    Your Streaming Movie & TV Guide. Lorem ipsum is placeholder text commonly used in the graphic.
                  </h1>
              
              </div>
            
            </div>
            <a href='#/search-movies' className='hover:text-lightblue hover:bg-white transition-all text-white text-center bg-gradient-to-r from-[#70a9f870] to-[#73bdfe] md:w-60 w-40 block p-5 rounded-lg md:text-2xl text-xl font-bold absolute sm:bottom-32 bottom-96 shadowStyle'>Find Movie </a>
         </div> 

        <div className='flex flex-col justify-around md:p-20 p-10'>
          <div>
              <p className='text-lightblue font-bold md:text-4xl text-2xl py-10'>Genres</p>
              <div className='grid grid-cols-2 md:grid-cols-5 '>
            
              { 
              genres.map((item, i) =>
               {
                 return(
                   <a href={`#/movies/${item.name.toLocaleLowerCase()}`} 
                   className={`m-2 text-lightblue p-2 rounded-2xl text-center shadowStyle hover:bg-lightblue hover:text-white transition-all`}>
                       {item.name}
                   </a>
                 )
               }
                   
                ) 
              }
             </div>
                     
          </div>
          

        </div> 
 
 
    </div>

  );
}

 

export default Home
