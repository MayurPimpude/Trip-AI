import React from 'react'
import { GiSandsOfTime } from "react-icons/gi";
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  return (
    <Link  to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName}  target='_blank'> 
        <div className='border p-4 rounded-xl flex gap-5 mt-2 hover:scale-105 transition-all hover:border-gray-400 hover:shadow-md cursor-pointer'>
            <img className='rounded-xl w-[120px] h-[120px]' src="/plane.jpg" alt="images_of_places" />
            <div>
                <h2 className='text-lg font-bold'>{place.placeName}</h2>
                <p className='text-sm text-gray-500'>{place.placeDetails}</p>
                <p className='flex mt-2 text-sm text-gray-700 gap-1 items-center'><GiSandsOfTime className='text-red-500' size={15} />{place.timeToTravel}</p>
                
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem