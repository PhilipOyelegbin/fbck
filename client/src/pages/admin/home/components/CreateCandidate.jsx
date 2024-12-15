import { useState } from "react";
import { toast } from "react-toastify";
import support from "../../../../assets/va.png";

export default function CreateCandidate() {
  const [data, setData] = useState({
    name: "",
    image_url: "",
    description: "",
    gender: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_API_URI}/api/v1/candidate`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((resp) => {
          if (resp.ok) {
            toast.success("Candidate created successfully");
            setData({
              name: "",
              url: "",
              description: "",
              gender: "",
            });
          }
        })
        .catch((err) => toast.error(err));
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className='p-5 bg-white rounded shadow-md flex gap-5 justify-center'>
      <div className='flex-1'>
        <h3 className='text-3xl font-bold mb-4'>Create a new candidate</h3>

        <form onSubmit={handleSave}>
          <label className='block mb-2'>
            <span className='text-gray-700'>Name</span>
            <input
              type='text'
              name='name'
              value={data.name}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
              placeholder='Enter name'
            />
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Image URL</span>
            <input
              type='url'
              name='image_url'
              value={data.image_url}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
              placeholder='Enter the image url'
            />
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Gender</span>
            <select
              name='gender'
              id='gender'
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
              value={data.gender}
              onChange={handleChange}>
              <option value=''>[SELECT GENDER]</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Description</span>
            <textarea
              name='description'
              id='description'
              value={data.description}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
              cols='30'
              rows='5'
              maxLength={200}
              placeholder='Describe te candidate here...'></textarea>
          </label>

          <button type='submit' className='btn max-w-fit'>
            Save
          </button>
        </form>
      </div>

      <div className='hidden md:block flex-1'>
        <img src={support} className='object-fill w-full h-full' alt='banner' />
      </div>
    </div>
  );
}
