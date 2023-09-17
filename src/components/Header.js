import React from 'react' 
import { Link } from 'react-router-dom'

function Header() {
  return (
    <h3 >
       <Link to='#/' className='md:text-6xl text-4xl text-lightblue pt-10 font1 leftStyle '>Movie App</Link>
    </h3>
  )
}

export default Header