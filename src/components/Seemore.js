import React from 'react'

 
export const Seemore = ({hide, num, movies, seeMore}) => {
    return(
          <>
            {
                    !hide && num < movies.length ? <div className='flex justify-center w-full mx-auto '>
                                        <button className='p-5 w-32 rounded-2xl text-lightblue' onClick={seeMore}>See More</button>
                              </div> : ''

                              
                    }
          
          </>
    )
}