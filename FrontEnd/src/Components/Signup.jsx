import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userindfo = {
      fullname: data.name,
      emailid: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userindfo
      );
      console.log(res);
      if (res.data) {
        toast.success("You are successfully Signed up");
        Navigate(from, { replace: true });
      }
      localStorage.setItem("User", JSON.stringify(res.data.user));
    } catch (error) {
      if (error.response) {
        console.error(error);
        toast.error("Error: " + error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="relative shadow-md py-4 px-3 rounded-md border-[2px]">
          <div className="relative">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 dark:text-white"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className="mt-2 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border rounded-md py-1 px-2 outline-none w-80"
                  {...register("name", {
                    required: true,
                    message: "This field is required",
                  })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/* E-mail */}
              <div className="mt-2 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded-md py-1 px-2 outline-none w-80"
                  {...register("email", {
                    required: true,
                    messgae: "This field is required",
                  })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-2 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="border rounded py-1 px-2 outline-none w-80"
                  {...register("password", {
                    required: true,
                    message: "This field is required",
                  })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 rounded-md px-3 py-1 text-white hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <button>
                    <span
                      className="cursor-pointer text-blue-700 underline"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </span>
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
