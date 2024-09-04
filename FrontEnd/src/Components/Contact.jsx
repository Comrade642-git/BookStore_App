import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="mx-auto mt-12 space-y-4 w-full max-w-md px-4">
        <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-sm block mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Name"
              className="border rounded-md py-2 px-3 outline-none w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="text-sm block mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="border rounded-md py-2 px-3 outline-none w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="text-sm block mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Type your Message"
              className="border rounded-md py-2 px-3 outline-none w-full h-24"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded w-full py-2 mt-4 hover:bg-blue-700 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
