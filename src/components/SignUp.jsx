import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <div className="mb-6 flex justify-center">
          <Logo width="80px" />
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800">Create Account</h2>
        <p className="mt-2 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>

        {error && (
          <p className="text-red-600 mt-4 text-center bg-red-100 p-2 rounded-md">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
