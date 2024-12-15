import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateAdmin() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/v1/admin`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        toast.success("New admin created");
      } else {
        toast.error(response.statusText);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <section className='p-5 bg-white rounded shadow-md'>
      <div className='flex-1'>
        <h3 className='text-3xl mb-4'>Create a new admin</h3>

        <form onSubmit={handleSave}>
          <label className='block mb-2'>
            <span className='text-gray-700'>Name</span>
            <input
              type='text'
              name='name'
              value={data.name}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
            />
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Email</span>
            <input
              type='email'
              name='email'
              value={data.email}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
            />
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Phone number</span>
            <input
              type='text'
              name='phone_number'
              value={data.phone_number}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
            />
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Password</span>
            <input
              type='password'
              name='password'
              value={data.password}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
            />
          </label>

          <div className='flex gap-5 items-center'>
            <button type='submit' className='btn max-w-fit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
