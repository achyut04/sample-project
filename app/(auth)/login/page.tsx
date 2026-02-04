"use client";
import { useRouter, redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/redux/actions/authAction/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { userDetails } = useSelector((state: any) => state?.user);
  // console.log("userDetails", userDetails);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/landing");
    }
  }, [router, userDetails]);
  const handleClick = () => {
    dispatch(userLogin({ email, password, mac_address: null }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col border rounded-2xl p-20 gap-2 bg-slate-100">
        <div className="flex flex-col">
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-2 py-1 bg-white"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-2 py-1 bg-white"
            type="password"
          />
        </div>

        <button
          className="cursor-pointer border rounded-full hover:bg-blue-500 bg-white hover:text-white transition-colors"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
