import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string(),
  phone_number: yup.string().min(11).required(),
  password: yup.string().min(6).required(),
});

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onRegister = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/v1/users`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        reset();
        navigate("/login");
      } else {
        toast.error("An error occurred during registration.");
      }
    } catch (error) {
      error && toast.error("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onRegister)} className='auth-form'>
      <h3>Get Started with us!</h3>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          {...register("name")}
          type='text'
          id='name'
          className='p-2 rounded-md border w-full'
          placeholder='Ada Pamilerin'
        />
      </div>
      {errors.name && (
        <span className='text-red-500'>{errors.name.message}</span>
      )}

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
        <label htmlFor='gender'>Gender</label>
        <select
          {...register("gender")}
          id='gender'
          className='p-2 rounded-md border w-full'>
          <option value=''>[SELECT GENDER]</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Others'>Others</option>
        </select>
      </div>
      {errors.gender && (
        <span className='text-red-500'>{errors.gender.message}</span>
      )}

      <div className='form-group'>
        <label htmlFor='phone_number'>Phone number</label>
        <input
          {...register("phone_number")}
          type='tel'
          id='phone_number'
          className='p-2 rounded-md border w-full'
          placeholder='+2348123456789'
        />
      </div>
      {errors.phone_number && (
        <span className='text-red-500'>{errors.phone_number.message}</span>
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

      <div className='flex gap-2 my-5'>
        <input type='checkbox' id='terms' required />
        <label htmlFor='terms'>
          Accept our{" "}
          <Link href='/' className='text-purple-500'>
            Terms of service
          </Link>
        </label>
      </div>

      <button disabled={isSubmitting} className='btn disabled:bg-gray-400'>
        {isSubmitting ? "Saving..." : "Sign Up"}
      </button>
    </form>
  );
};
