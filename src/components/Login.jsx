import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-24">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-800">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Don’t have an account?&nbsp;
                    <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 text-center mt-4">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-6 space-y-4">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                        error={errors.password?.message}
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition">
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
