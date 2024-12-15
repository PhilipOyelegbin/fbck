import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateUser() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
    date_of_birth: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    try {
      fetch(`${import.meta.env.VITE_API_URI}/api/v1/users/${email}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((resp) => {
          if (resp.ok) {
            navigate("/panel/users");
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
    fetch(`${import.meta.env.VITE_API_URI}/api/v1/users/${email}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((resp) => resp.json())
      .then((result) =>
        setData({
          name: result.data.name || "",
          email: result?.data.email || "",
          date_of_birth: result?.data.date_of_birth || "",
          gender: result?.data.gender || "",
          phone_number: result?.data.phone_number || "",
        })
      )
      .catch((err) => toast.error(err));
  }, [email]);

  return (
    <section className='p-5 bg-white rounded shadow-md'>
      <div className='flex-1'>
        <h3 className='text-3xl font-bold mb-4'>Update a user</h3>

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
            <span className='text-gray-700'>Gender</span>
            <select
              name='gender'
              id='gender'
              className='p-2 rounded-md border w-full'
              value={data.gender}
              onChange={handleChange}>
              <option value=''>[SELECT GENDER]</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Date of Birth</span>
            <input
              type='text'
              name='date_of_birth'
              value={data.date_of_birth}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
            />
          </label>
          <label className='block mb-2'>
            <span className='text-gray-700'>Phone number</span>
            <input
              type='tel'
              name='phone_number'
              value={data.phone_number}
              onChange={handleChange}
              className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 rounded-md outline-none'
            />
          </label>

          <div className='flex gap-5 items-center'>
            <button type='submit' className='btn max-w-fit'>
              Save
            </button>

            <Link
              to='/panel/users'
              className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md'>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
