'use client';
import React,{useState} from "react";
import login from "../libs/login";
import ErrorDisplay from "./ErrorDisplay";

const LoginForm = () =>{
    const [values,setValues] = useState({
        email : "",
        password : "",
    })
    const changeHandler = (event) =>{
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
    const [error,setError] = useState();
    const submitHandler = async (event) =>{
        event.preventDefault();
        try {
            const response = await login(values);
            if(response.accessToken){
                localStorage.setItem("accessToken",response.accessToken);
            }else{
                localStorage.removeItem("accessToken");
            }
        } catch (error) {
            localStorage.removeItem("accessToken");
            setError(error.message);
            setTimeout(() => {
                setError(null); 
            }, 2500);
        }
    }
    return (
        <div className="container mx-auto my-8">
          <form onSubmit={submitHandler} className="max-w-md mx-auto p-6 bg-gray-100 rounded">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {error && <ErrorDisplay message={error}/>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={changeHandler}
                value={values.email || ""}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password || ""}
                onChange={changeHandler}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      );
}
export default LoginForm;