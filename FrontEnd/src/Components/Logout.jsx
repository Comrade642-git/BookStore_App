import React from "react";
import { useAuth } from "../Context/Auth";
import toast from "react-hot-toast";

function Logout() {
  const [AuthUser, setUser] = useAuth();
  const HandleClick = () => {
    try {
      setUser(null);
      localStorage.removeItem("User");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      },3000);
    } catch (error) {
      toast.error("Error:" + error.message);
      setTimeout(()=>{},2000)
    }
  };
  return (
    <>
      <button
        className="px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md"
        onClick={HandleClick}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;
