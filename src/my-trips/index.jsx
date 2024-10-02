import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useNavigation } from "react-router-dom";
import { db } from "../service/firebaseConfig";
import UsersTripCardItem from "./components/UsersTripCardItem";
import Footer from "../view-trip/components/Footer";


function MyTrips() {

  const navigate = useNavigation();
  const [userTrips,setUserTrips] = useState([]);

  useEffect(()=>{
    GetUserTrips();
  },[])

const GetUserTrips=async ()=>{
  
  const user = JSON.parse(localStorage.getItem('user'));

  if(!user){
    navigate('/')
    return ;
  }

  setUserTrips([]);
  const q = query(collection(db,'Trips'),where('userEmail','==',user?.email))

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) =>{
    console.log(doc.id,'==>',doc.data());
    setUserTrips(prevVal =>[...prevVal,doc.data()])
  })

}

  return (
    
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-15 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
        {userTrips.map((trip,index)=>(
          <UsersTripCardItem trip={trip} />
        ))}
      </div>
      <div className="mt-20">
        <Footer />
      </div>
      
    </div>
    
    
  )
}

export default MyTrips