"use client";
import { useState } from "react";

export default function PasswordUpdate() {
  const [formInput, setFormInput] = useState({
    password: "",
  });

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <section className='max-w-screen-xl mx-auto text-gray-600 mt-5 bg-white p-10 rounded-lg h-fit'>
      <h3 className='text-indigo-600 text-center font-semibold'>
        Change password
      </h3>
      <div className='mt-12 max-w-lg mx-auto'>
        <form onSubmit={handleUpdate} className='space-y-5'>
          <div>
            <label className='font-medium'>New Password</label>
            <input
              type='text'
              name='password'
              value={formInput.password}
              onChange={handleChange}
              required
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>

          <button className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
