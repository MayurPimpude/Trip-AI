// import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from '../ui/button'
import { GiWhaleTail } from "react-icons/gi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';


function Header() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log('profile: ', user)
  }, [])


  // ################### function to validate login of google ################### //
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })


  // ################### function to getuser profile for G-Auth ################### //
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json'
        }
      }
    ).then((resp) => {
      console.log(resp)
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false)
    })
  }

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-3'>
      {/* <img src="logo2.svg" alt="logo" /> */}
      <h2 className='flex text-blue-700 text-xl font-bold'><GiWhaleTail className=' mr-2 text-blue-900 ml-2' size={30} /> <span className='text-blue-400'>TELL</span>TRIPZY</h2>
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/my-trips'>
               <Button variant='outline' className='rounded-full'>My Trips</Button>
            </a>

            <Popover>
              <PopoverTrigger> <img src={user?.picture} alt="profilepic" className='h-[35px] w-[35px] rounded-full' /></PopoverTrigger>
              <PopoverContent>
                <h2 onClick={() => {
                  googleLogout;
                  localStorage.clear();
                  window.location.reload()
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

          </div>
          : <Button onClick={() => {
            setOpenDialog(true)
          }}>Sign In</Button>
        }

        <Dialog open={openDialog}>

          <DialogContent onClick={() => setOpenDialog(false)}>
            <DialogHeader>

              <DialogDescription onClick={() => setOpenDialog(false)}>

                <h2 className='flex text-blue-700 text-xl font-bold'><GiWhaleTail className=' mr-2 text-blue-900 ml-2' size={30} /> <span className='text-blue-400'>TELL</span>TRIPZY</h2>
                <h2 className="text-lg font-bold mt-7">Sign In with Google</h2>
                <p>Sign to app with Google authentication securely</p>

                <Button onClick={login} className="mt-5 w-full gap-4"><FcGoogle size={25} />Sign In with Google</Button>

              </DialogDescription>
            </DialogHeader>
            {/* <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setOpenDialog(false)}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter> */}
          </DialogContent>



        </Dialog>

      </div>
    </div>
  )
}

export default Header