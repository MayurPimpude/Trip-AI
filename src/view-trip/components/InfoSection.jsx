import { useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails } from '../../service/GlobalApi';


function InfoSection({trip}) {
  
  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])
  
  const  GetPlacePhoto= async()=>{
    const data={
      textQuery:trip?.userSelections?.location
    }

    const result = await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
    })
  }

  return (
    <div>
      <img src="/plane.jpg" alt="img1" className='w-full h-[320px] rounded-lg'/>
      
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{trip?.userSelections?.location}</h2>
            <div className='flex gap-5'>
              <h2 className='p-2 px-3 text-gray-600 text-xs rounded-full bg-gray-200 lg:text-sm md:text-md'>📆 {trip?.userSelections?.noOfdays} Day</h2>
              <h2 className='p-2 px-3 text-gray-600 text-xs rounded-full bg-gray-200 lg:text-sm md:text-md'>💰 {trip?.userSelections?.budget} Budget </h2>
              <h2 className='p-2 px-3 text-gray-600 text-xs rounded-full bg-gray-200 lg:text-sm md:text-md'>🧳 Number of Traveler : {trip?.userSelections?.traveler} </h2>
              
            </div>
        </div>
        <Button><IoIosSend size={20} /></Button>
      </div>

    </div>
  )
}

export default InfoSection