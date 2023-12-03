import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
const Modal = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)
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
            <div className="form-control mt-6">
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
    </dialog>
  );
};

export default Modal;
