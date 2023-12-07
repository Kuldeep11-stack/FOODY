import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const {createUser , login} = useContext(AuthContext);

      const location = useLocation();

      const navigate = useNavigate();

      const from = location.state?.from?.pathname || "/";
      const onSubmit = (data) => {
        const email = data.email;
        const password  = data.password;

        createUser(email,password).then((result)=>{
          const user = result.user;

          alert("Account creation Succesfull");

          document.getElementById('my_modal_5').close();
          navigate(from,{replace: true})
        }).catch((error)=>{
          console.log(error);
        })
      }
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
              Sign Up
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