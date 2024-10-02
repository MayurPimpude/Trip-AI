import { Link } from 'react-router-dom'

function UsersTripCardItem({trip}) {
  return (
    <Link to={'/view-trip/'+trip?.id} >
        <div className='hover:scale-105 transition-all hover:shadow-md rounded-lg p-2'>
            <img src="/plane.jpg" alt="test" className='rounded-lg object-cover'/>
            <div >
                <h2 className='font-semibold text-lg'>{trip?.userSelections?.location}</h2>
                <h2 className='text-sm text-gray-600'>{trip?.userSelections.noOfdays} Days trip with {trip?.userSelections.budget} Budget</h2>
            </div>
        </div>
    </Link>
  )
}

export default UsersTripCardItem