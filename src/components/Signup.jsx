import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Modal from "./Modal";

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)
  return (
   
     <div className="max-wd-md bg-white w-full mx-auto flex items-center justify-center my-20 ">
         <div className="modal-action mt-0 flex flex-col justify-center shadow-lg">
            
        <form className="card-body" method="dialolg" onSubmit={handleSubmit(onSubmit)}>
            
          <h3 className="font-bold text-lg">Create a Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label -mb-3">
              <a href="#" className="label-text-alt link link-hover mt-3">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-green text-white"
            />
          </div>
          <p className="text-center my-2">
             Have an account?{" "}
            <button onClick={()=>document.getElementById('my_modal_5').showModal()}  className="underline text-red ml-1">
              Login
            </button>
            <Modal/>
          </p>
          <Link to="/" onClick={()=>document.getElementById('my_modal_5').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

        </form>
        <div className="flex flex-row gap-4 items-center justify-center mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebook/>
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub/>
          </button>
          
        </div>
      </div>
     </div>
    
  )
}

export default Signup