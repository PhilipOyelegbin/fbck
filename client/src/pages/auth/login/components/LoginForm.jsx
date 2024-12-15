import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const schema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const LoginForm = () => {
  const route = useNavigate();
  const session = sessionStorage.getItem("user");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onLogin = async (data) => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      if (!resp.ok) {
        toast.error("Invalid details");
      } else {
        const user = await resp.json();
        sessionStorage.setItem("token", user.token);
        reset();
        route("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (session) {
      route("/dashboard");
    }
  }, [session, route]);

  return (
    <form onSubmit={handleSubmit(onLogin)} className='auth-form'>
      <h3>Welcome back!</h3>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          {...register("email")}
          type='email'
          id='email'
          className='p-2 rounded-md border w-full'
          placeholder='adapam@gmail.com'
        />
      </div>
      {errors.email && (
        <span className='text-red-500'>{errors.email.message}</span>
      )}

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          {...register("password")}
          type='password'
          id='password'
          className='p-2 rounded-md border w-full'
          placeholder='XXXXXXXXXX'
        />
      </div>
      {errors.password && (
        <span className='text-red-500'>{errors.password.message}</span>
      )}

      <div className='flex flex-col items-center gap-5 md:flex-row md:justify-between'>
        <button
          disabled={isSubmitting}
          className='btn max-w-fit disabled:bg-gray-400'>
          {isSubmitting ? "Checking" : "Sign In"}
        </button>
        <Link
          to='/resetpassword'
          className='text-sm text-center block underline'>
          Forgot password?
        </Link>
      </div>
    </form>
  );
};
