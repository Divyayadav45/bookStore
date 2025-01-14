import React, { useState } from 'react';
import { useForm} from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


function NewUser() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
      const userInfo={
        name:data.name,
        email:data.email,
        password:data.password,
      }
      await axios.post("http://localhost:4001/user/newuser", userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Loggedin successfully');
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err) => {
          console.log(err)
          toast.error("Error: " + err);
      });
    };
 return (
  <>
    <div className="min-h-screen flex items-center justify-center">
      <div className=" w-96 md:w-full max-w-md p-8 space-y-4  rounded-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
</>
 )}

export default NewUser;
