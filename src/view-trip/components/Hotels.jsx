import React from 'react'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

function Hotels({trip}) {
  return (
    <div>
        <h2 className='text-xl font-bold mt-5'>Hotels Recommendations</h2>
        
        <div className='mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {trip?.tripdata?.hotels?.map((hotel,index)=>(
                <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+','+hotel?.hotelAddress}  target='_blank'> 
                    <div className='hover:scale-105 transition-all cursor-pointer'>
                        <img src="/plane.jpg" alt="img" className='rounded-xl'/>
                        <div className='my-2 flex flex-col gap-2'>
                            <h2 className='font-medium'>{hotel.hotelName}</h2>
                            <h2 className='text-xs text-gray-600'>⚓{hotel.hotelAddress}</h2>
                            <h2 className='text-sm'>💰{hotel.price}</h2>
                            <h2 className='flex gap-1 text-sm'><IoIosStar className='text-yellow-400' size={20}/>{hotel.rating}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Hotels