import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateHosting() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    image_url: "",
    gender: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    try {
      fetch(`${import.meta.env.VITE_API_URI}/api/candidate/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((resp) => {
          if (resp.ok) {
            navigate("/panel/candidates");
          } else {
            toast.error(resp.statusText);
          }
        })
        .catch((err) => toast.error(err));
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URI}/api/candidate/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((resp) => resp.json())
      .then((result) =>
        setData({
          name: result?.data.name || "",
          image_url: result?.data.image_url || "",
          gender: result?.data.gender || "",
          description: result?.data.description || "",
        })
      )
      .catch((err) => toast.error(err));
  }, [id]);

  return (
    <section className='p-5 bg-white rounded shadow-md'>
      <div className='flex-1'>
        <h2 className='text-3xl font-bold text-purple-600 mb-4'>
          Update a candidate
        </h2>

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
            <span className='text-gray-700'>Image URL</span>
            <input
              type='url'
              name='image_url'
              value={data.image_url}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
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
              cols='30'
              rows='5'
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
              value={data.description}
              onChange={handleChange}></textarea>
          </label>

          <div className='flex gap-5 items-center'>
            <button type='submit' className='btn max-w-fit'>
              Save
            </button>

            <Link
              to='/panel/candidates'
              className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md'>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
