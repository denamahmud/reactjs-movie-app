import React from 'react' 

function Search({stext, showChange, show}) {

  
  return (
    <div className=' md:w-full w-4/6 mx-auto '>
        <form className='flex justify-between md:py-20 py-40 md:mx-60 ' onSubmit={show}>
            <input type="text"
            value={stext}
            onChange={showChange} 
            placeholder='search' 
            className='rounded-2xl text-blackdark border-b-2 order-indigo-500 outline-none w-full p-2 bg-transparent'/>
           
        </form>
    </div>
  )
}

export default Search