import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
   <div className=" signin flex h-screen justify-center items-center ">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <div  className="w-[600px]  ">
        <div className='modal-box'>
          <form method="dialog " onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg  text-red-800">Signup</h3>
          <div className="mt-2">
          <div className="space-y-2">
              <h2>Name</h2>
              <input
                className="outline-none border"
                type="text"
                placeholder="Enter your name"
                {...register("name",{required: true})}
                
              />
              <br/>
              {errors.name && <span className="text-red-800 text-sm ">This field is required</span>}
            </div>
            <div className=" mt-2 space-y-2">
              <h2>Email</h2>
              <input
                className="outline-none border"
                type="email"
                placeholder="Enter your email"
                {...register("email",{required: true})}
              />
               <br/>
               {errors.email && <span className="text-red-800 text-sm ">This field is required</span>}
            </div>

            <div className="mt-2 space-y-2">
              <h2>Password</h2>
              <input
                className="outline-none border"
                type="password"
                placeholder="Enter your password"
                {...register("password",{required: true})}
              />
               <br/>
               {errors.password && <span className="text-red-800 text-sm ">This field is required</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-600 text-white rounded-md px-2 py-1 hover:bg-pink-800">
                Signup
              </button>
              <p>
                Registered?{" "}
                <button
                  className="text-blue-500 underline cursor-pointer"
                  onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
                
              </p>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup