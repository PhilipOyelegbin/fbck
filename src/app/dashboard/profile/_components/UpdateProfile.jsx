"use client";
import { useState } from "react";

export default function UpdateProfile() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    date_of_birth: "",
  });

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <section className='max-w-screen-xl mx-auto text-gray-600 mt-5 bg-white p-10 rounded-lg'>
      <h3 className='text-indigo-600 text-center font-semibold'>
        Reveiw your profile
      </h3>
      <div className='mt-12 max-w-lg mx-auto'>
        <form onSubmit={handleUpdate} className='space-y-5'>
          <div className='flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row'>
            <div>
              <label className='font-medium'>Full name</label>
              <input
                type='text'
                name='name'
                value={formInput.name}
                onChange={handleChange}
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
              />
            </div>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                name='email'
                value={formInput.email}
                onChange={handleChange}
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
              />
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row'>
            <div>
              <label className='font-medium'>Phone number</label>
              <input
                type='tel'
                name='phone_number'
                value={formInput.phone_number}
                onChange={handleChange}
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
              />
            </div>
            <div>
              <label className='font-medium'>Date of Birth</label>
              <input
                type='text'
                name='date_of_birth'
                value={formInput.date_of_birth}
                onChange={handleChange}
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
              />
            </div>
          </div>
          <div>
            <label className='font-medium'>Gender</label>
            <select
              name='gender'
              value={formInput.gender}
              onChange={handleChange}
              className='text-gray-500 w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
          </div>

          <button className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
