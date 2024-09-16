import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      emailid: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userinfo
      );
      if (res.data) {
        toast.success("You have successfully logged in");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("User", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
        console.log("Error:" + error);
        setTimeout(()=>{},2000)
      }
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 dark:text-black"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg dark:text-black">Login</h3>
            {/* E-mail */}
            <div className=" mt-2 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-md py-1 px-2 outline-none w-80"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className=" mt-2 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="border rounded py-1 px-2 outline-none w-80"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 rounded-md px-3 py-1 text-white hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/home/signup">
                  <span className="cursor-pointer text-blue-700 underline ">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
