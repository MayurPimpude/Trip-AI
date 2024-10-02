import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebaseConfig';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';


function Viewtrip() {

  const {tripId} = useParams();
  const [trip,setTrip]=useState([]);
  
  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])

  const GetTripData=async()=>{
        const docRef = doc(db,'Trips',tripId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document",docSnap.data());
            setTrip(docSnap.data());
        }
        else
        {
            console.log("No Document Found")
            toast("No Trips found")
        }
  }

  return (
    <div className='p-10 md:px-10 lg:px-44 xl:px-56'>
        {/*  information */}
            <InfoSection trip={trip} />

        {/*  recommendation */}
        <Hotels trip={trip} />

        {/*  Daily plan */}
        <PlacesToVisit  trip={trip}/>

        {/* footer */}
        <Footer />
    </div>
    

    
  )
}

export default Viewtrip