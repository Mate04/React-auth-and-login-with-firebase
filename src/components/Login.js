import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Email not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong password");
      } else {
        setError("Invalid Creditials");
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-fold mb-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            placeholder="yourEmail@company.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline w-full max-w-xs m-auto">Login</button>
      </form>
      <Link to='/register'><p className="my-4 text-sm flex justify-between text-lg text-slate-500">Don't have an Accout? </p></Link>
      <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full">Login Google</button>
    </div>
  );
}
