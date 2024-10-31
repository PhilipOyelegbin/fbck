import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onLogin = async (data) => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_URI}/api/auth`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      if (!resp.ok) {
        toast.error("Invalid details!");
      } else {
        const admin = await resp.json();
        const decode = jwtDecode(admin.token);
        localStorage.setItem("token", admin.token);
        localStorage.setItem("user", decode.id);
        reset();
        navigate("/panel");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <article className='h-screen flex justify-center items-center bg-purple-100'>
      <div className='max-w-md w-full p-4 bg-white rounded shadow-md'>
        <h2 className='text-3xl font-bold mb-4'>Admin Login</h2>

        <form onSubmit={handleSubmit(onLogin)}>
          <label className='block mb-2'>
            <span className='text-gray-700'>Email</span>
            <input
              {...register("email")}
              type='email'
              className='w-full p-2 pl-10 text-sm text-gray-700'
              placeholder='Enter email'
            />
            {errors.email && (
              <span className='text-red-500'>{errors.email.message}</span>
            )}
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Password</span>
            <input
              {...register("password")}
              type='password'
              className='w-full p-2 pl-10 text-sm text-gray-700'
              placeholder='Enter password'
            />
            {errors.password && (
              <span className='text-red-500'>{errors.password.message}</span>
            )}
          </label>

          <button
            type='submit'
            disabled={isSubmitting}
            className='btn disabled:bg-gray-400'>
            {isSubmitting ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    </article>
  );
}

export default AdminLoginPage;
