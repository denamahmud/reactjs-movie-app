import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom'

const Toprated = ({ toprated }) => {



  return (
    <div className='sm:px-20 '>
        <Carousel cols={4} rows={1} gap={10} showDots={true} autoplay={1000} dotColorActive='#4189CC' mobileBreakpoint={600} > 
              
              {
              toprated.map(item => {
                  return(
                        <Carousel.Item>
                            <Link to={`#/details/${item.id}`} >
                                  <img className='rounded-xl' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                  <div className='bg-[#4189CC99] p-3 relative -top-52 rounded-lg'>
                                        <p>
                                            name : {item.title}
                                        </p>
                                        <p>
                                            vote_average : {item.vote_average}
                                        </p>
                                    </div>
                              </Link>
                          
                               
                              
                        </Carousel.Item>
                  )
              })
              }

        </Carousel>
    </div>
  
  )
}

export default Toprated