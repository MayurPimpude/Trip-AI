import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-lg'>Places To Visit</h2>
        <div>
            {trip?.tripdata?.itinerary.map((item,index)=>(
                <div>
                    <h2 className='text-lg font-medium'>{item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                    {item.plan.map((place,index)=>(
                            <div className='my-3'>
                                <h2 className='text-sm font-medium text-orange-500'>{place.bestTimeToVisit}</h2>
                              
                                <PlaceCardItem place={place}/>
                            </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit