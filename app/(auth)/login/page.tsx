// const Login = () => {
//   return <h1 className="p-2">Login Page</h1>;
// };
// export default Login;

"use client";
import { redirect } from "next/navigation";

const Login = () => {
  const handleClick = () => {
    redirect("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col border rounded-2xl p-20 gap-2 bg-slate-100">
        <div className="flex flex-col">
          <label>Email: </label>
          <input className="border rounded-lg px-2 py-1 bg-white" type="text" />
        </div>
        <div className="flex flex-col">
          <label>Password: </label>
          <input
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
