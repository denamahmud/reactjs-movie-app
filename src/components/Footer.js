import React from 'react'

function Footer({genres}) {

  return (
    <div className='bg-black text-white '>
        <div className='grid grid-cols-1 md:grid-cols-4 py-20 items-center'>
              <a href='/' className='text-center font-semibold md:text-5xl text-3xl font1 hover:text-lightblue transition-all'>MOVIE APP</a>
              <div className=' flex flex-col text-lg gap-2  text-center mt-10'>
                 <a href='/' className='hover:text-lightblue transition-all'>Home</a>
                 <div>about us</div>
                 <div>contact us</div>
                 <div>career</div>
              </div>
              
           
              <div className=' flex flex-col gap-2 md:text-lg text-md text-center my-10'>
              { 
              genres.slice(0, 5).map((item, i) =>
               {
                 return(
                   <a href={`/movies/${item.name.toLocaleLowerCase()}`} className=' hover:text-lightblue transition-all ' >
                       {item.name}
                   </a>
                 )
               }
                   
                ) 
              }
               
          
               
              </div>
              <div className=' flex flex-col gap-2 md:text-lg text-md text-center'>
               
                 <a href='#' className='hover:text-lightblue transition-all'>Facebook </a>
                 <a href='#' className='hover:text-lightblue transition-all'>Instagram</a>
                 <a href='#' className='hover:text-lightblue transition-all'>Twitter</a>
                 <a href='#' className='hover:text-lightblue transition-all'>Youtube</a>
              </div>
        </div>
        <div className='flex justify-center text-white bg-blackdark md:text-lg text-md py-5'>
            <p>copyright</p>
            <p className='ml-3'>&copy; 2023.</p> 
        </div>
    </div>
  )
}

export default Footer