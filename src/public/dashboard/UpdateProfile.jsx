import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
    const {updateuserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const location = useLocation();

      const navigate = useNavigate();

      const from = location.state?.from?.pathname || "/";
      const onSubmit = (data) => {
        const name = data.name;

        const photoURL = data.photoURL;

        updateuserProfile(name,photoURL).then(()=>{
            navigate(from,{replace: true})
        }).catch((error)=>{
            console.log(error)
        })
        
      }
  return (
    <div className="flex items-center justify-center">
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <h3 className='font-bold'>Update Your Profile</h3>
        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input   {...register("name")}type="text" placeholder="Update Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text"  {...register("photoURL")} placeholder="photoURL" className="input input-bordered" required />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green text-white">Update</button>
        </div>
      </form>
    </div>
  </div>
    </div>
    </div>
  )
}

export default UpdateProfile