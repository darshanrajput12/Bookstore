import React from 'react'
import { useAuth } from './Context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
   
    const [authUser , setAuthUser] = useAuth()
    
        const handleLogOut = ()=>{
            try{
            setAuthUser({
                ...authUser,
                User:  null,
        })
        localStorage.removeItem("user:")
        toast.success("Logut sucessfully")
        setTimeout(()=>{
            window.location.reload()
    
        },2000)
       
    }


     catch (error) {
        console.log(error)
        toast.error("error :", error.message)
        setTimeout(()=>{})
    }
        }
    
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 rounded-md text-white'
        onClick={handleLogOut}
        >Logout</button>          
    </div>
  )
}

export default Logout