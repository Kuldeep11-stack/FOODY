import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthProvider";
const Modal = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const {signUpWithGmail,login} = useContext(AuthContext);
      const [errormessage,seterrormessage] = useState(false);

      const location = useLocation();

      const navigate = useNavigate();

      const from = location.state?.from?.pathname || "/";
      const onSubmit = (data) => {
        // console.log(data.email);
        // console.log(data.password)

        const email = data.email;
        const password = data.password;

        login(email,password).then((result)=>{
          const user = result.user;
          alert("Login Succesfull");
          document.getElementById('my_modal_5').close();
          navigate(from,{replace: true})
        }).catch((error)=>{
           const errormessage = error.message;
           seterrormessage("Please a correct email and password");
        })
      }

      //google signin
      const handleLogin = () =>{
        signUpWithGmail().then((result) =>{
          const user = result.user;
          alert("Login Succesfull!")
          navigate(from,{replace: true})
        }).catch((error)=>console.log(error))
      }
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action mt-0 flex flex-col justify-center">
          <form className="card-body" method="dialolg" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Please Login</h3>
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

            {
              errormessage? <p className="text-red text-xs italic mt-2">{errormessage}</p> : ""
            }
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white"
              />
            </div>
            <p className="text-center my-2">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>
            </p>
            <button htmlFor="my_modal_5" onClick={()=>document.getElementById('my_modal_5').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex flex-row gap-4 items-center justify-center mb-5">
            <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLogin}>
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
    </dialog>
  );
};

export default Modal;
