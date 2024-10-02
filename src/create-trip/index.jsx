import { Input } from "@/components/ui/input"
import {useState,useEffect} from 'react'
import { SelectTravelesList,SelectBudgetOptions, AI_PROMPT } from '../constants/options'
import {Button} from '../components/ui/button'
import { toast } from "sonner"
import { chatSession } from "../service/AIModel"
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { VscLoading } from "react-icons/vsc";
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../service/firebaseConfig"
import { useNavigate } from "react-router-dom"



function CreateTrip() {

  // const [place,setPlace] = useState();
  const [formData,setFormData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [openDialog,setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handeInputChange= (name,value) =>{
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData)
  },[formData])


 // ################### function to Generate AI trip ################### //
  const OnGenerateTrip=async()=>{

    const user = localStorage.getItem('user');

    if(!user)
    {
      setOpenDialog(true)
      return;
    }

    if(formData?.noOfdays==0 || formData?.noOfdays>10)
    {
      console.log("Error No of Days")
      return (
        toast("Enter Valid Number of Days")
    );
    }

    if(!formData?.budget || !formData?.traveler || !formData?.noOfdays)
    {
      console.log("Please Fill Form")
      
      return (
        toast("Fill all Fields of Form")
      );
    }

    console.log(formData)
    setLoading(true)
    const Final_PROMPT = AI_PROMPT.replace('{location}',formData?.location)
                                  .replace('{totalDays}',formData?.noOfdays)
                                  .replace('{traveler}',formData?.traveler)
                                  .replace('{budget}',formData?.budget)

    console.log(Final_PROMPT)

    const result = await chatSession.sendMessage(Final_PROMPT)

    console.log(result?.response?.text())
    setLoading(false)
    // ################## saving data into firebase ###################### //
    SaveAiTrip(result?.response?.text())
    
  }


  // ################### function to save data to firebase ################### //
  const SaveAiTrip = async(TripData) =>{

    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'));
    const docID = Date.now().toString();

    await setDoc(doc(db, "Trips", docID), {
      userSelections: formData,
      tripdata: JSON.parse(TripData),
      userEmail: user?.email,
      id: docID
    });
    setLoading(false)
    navigate('/view-trip/'+docID)
  }

    // ################### function to validate login of google ################### //
    const login = useGoogleLogin({
      onSuccess:(codeResp) => GetUserProfile(codeResp),
      onError:(error)=>console.log(error)
    })


    // ################### function to getuser profile for G-Auth ################### //
    const GetUserProfile =(tokenInfo)=>{
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers:{
            Authorization:`Bearer ${tokenInfo?.access_token}`,
            Accept:'Application/json'
          }
        }
      ).then((resp) =>{
        console.log(resp)
        localStorage.setItem('user',JSON.stringify(resp.data))
        setOpenDialog(false)
        OnGenerateTrip();
      })
    }

  

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-15 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell Us Your Travel Preference 🏕️</h2>
      <p className='mt-2 text-gray-500 text-xl'>Just Provide some basic details to let AI make your Trip.</p>

      <div className='mt-10 flex flex-col gap-9'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of your choice ? 🗺️</h2>
          <Input placeholder={'Mumbai'} type='text'  
              onChange={(v) => handeInputChange('location',v.target.value)}
             />

        </div>
        <div>
          <h2 className='my-3 text-xl font-medium'>How many days are you planning trip ? 📅</h2>
          <Input placeholder={'Ex.2'} type='number' onChange={(e)=>handeInputChange('noOfdays',e.target.value)}/>
        </div>
        
        <div>
          <h2 className='my-3 text-xl font-medium'>What is Your Budget ?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} 
              onClick={()=>handeInputChange('budget',item.title)}
              className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${formData?.budget==item.title&& 'shadow-lg'}`}>
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>

            ))}
          </div>
        </div>

        <div>
          <h2 className='my-3 text-xl font-medium'>Who do you plan on your next adventure ?</h2>

          <div className="grid grid-cols-3 gap-5">
            {SelectTravelesList.map((item, index) => (
              <div key={index} 
              onClick={()=>handeInputChange('traveler',item.people)}
              className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${formData?.traveler==item.people&& 'shadow-lg'}`}>
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>

            ))}
          </div>
        </div>
      </div>

      <div className="my-10 text-center">
          <Button disabled={loading} 
                  onClick={OnGenerateTrip} 
                  className='w-1/2 items-center p-5'>
                    {loading? <VscLoading className="animate-spin" size={20} />: 'Generate Trip'}
                    </Button>
      </div>

      <Dialog open={openDialog}>
        
        <DialogContent>
          <DialogHeader>
            
            <DialogDescription>

              <img src="/logo.svg" alt="logo" />
              <h2 className="text-lg font-bold mt-7">Sign In with Google</h2>
              <p>Sign to app with Google authentication securely</p>

              <Button onClick={login} className="mt-5 w-full gap-4"><FcGoogle size={25} />Sign In with Google</Button>
            
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      

    </div>
  )
}

export default CreateTrip
