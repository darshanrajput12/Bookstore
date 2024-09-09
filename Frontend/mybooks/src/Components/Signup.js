import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate()
  const from = "/";
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res);

        if (res.data) {
          toast.success("Sign up successfull");
        }
        localStorage.setItem("user:",JSON.stringify(res.data.user))
        setTimeout(()=>{
          navigate(from , {replace: true});

        },2000)
        setTimeout(()=>{
          toast.custom(<div className="m-16 "><h1 className="font-serif font-bold ">Now login the and use the site</h1></div>)

        },3000)
        
        
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error : User already exist");
        }
      });
  };

  return (
    <>
      <div className=" signin flex h-screen justify-center items-center ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
        <div className="w-[600px]  ">
          <div className="modal-box">
            <form method="dialog " onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
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
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-red-800 text-sm ">
                      This field is required
                    </span>
                  )}
                </div>
                <div className=" mt-2 space-y-2">
                  <h2>Email</h2>
                  <input
                    className="outline-none border"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-red-800 text-sm ">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-2 space-y-2">
                  <h2>Password</h2>
                  <input
                    className="outline-none border"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-red-800 text-sm ">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="flex justify-around mt-4">
                  <button className="bg-pink-600 text-white rounded-md px-2 py-1 hover:bg-pink-800">
                    Signup
                  </button>
                  <p>
                    Registered?{" "}
                    <button
                      className="text-blue-500 underline cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
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
  );
}

export default Signup;
