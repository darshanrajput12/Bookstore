
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"

function Login() {
  const[openModal , setModal] = useState(true);
  const closeModal = ()=>{setModal(false)};
  useEffect(()=>{
    setModal(true)

  },[closeModal])



  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        // console.log(res);

        if (res.data) {
          toast.success("Login successfull");
        }

        localStorage.setItem("user:",JSON.stringify(res.data.user))
        window.location.reload()
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error : Wrong email or password");
        }
      });
  };
  return (
    <>
    {openModal &&
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            
              <Link to={'/'}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </Link>
            

            <h3 className="font-bold text-lg  text-red-800">Login!</h3>
            <div className="mt-2">
              <div className="space-y-2">
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
                <button className="bg-pink-600 text-white rounded-md px-2 py-1">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
}
    </>
              
  );
}

export default Login;
