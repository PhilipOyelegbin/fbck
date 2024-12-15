import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    phone_number: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const storedUser = sessionStorage?.getItem("user");
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/v1/users/${storedUser}`,
        {
          method: "PATCH",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        toast.success("Profile saves successfully");
      } else {
        toast.error("An error occurred during update.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const storedUser = sessionStorage?.getItem("user");
    fetch(`${import.meta.env.VITE_API_URI}/api/v1/users/${storedUser}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    })
      .then((resp) => resp.json())
      .then((result) =>
        setUser({
          name: result?.data.name,
          email: result?.data?.email,
          date_of_birth: result?.data?.date_of_birth,
          phone_number: result?.data?.phone_number,
          gender: result?.data?.gender,
        })
      )
      .catch((error) => toast.error(error));
  }, []);

  return (
    <form
      onSubmit={handleUpdate}
      className='auth-form lg:w-1/2 p-5 bg-white rounded-md'>
      <h3>Review your details</h3>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='p-2 rounded-md border w-full'
          value={user.name}
          onChange={handleChange}
          placeholder='Ada Pamilerin'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className='p-2 rounded-md border w-full'
          value={user.email}
          onChange={handleChange}
          readOnly
          placeholder='adapam@gmail.com'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='date_of_birth'>Date of Birth</label>
        <input
          type='text'
          name='date_of_birth'
          id='date_of_birth'
          className='p-2 rounded-md border w-full'
          value={user.date_of_birth}
          onChange={handleChange}
          placeholder='YY/MM/DD'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='gender'>Gender</label>
        <select
          name='gender'
          id='gender'
          className='p-2 rounded-md border w-full'
          value={user.gender}
          onChange={handleChange}>
          <option value=''>[SELECT GENDER]</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Others'>Others</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='phone_number'>Phone number</label>
        <input
          type='tel'
          name='phone_number'
          id='phone_number'
          className='p-2 rounded-md border w-full'
          value={user.phone_number}
          onChange={handleChange}
          placeholder='+2348123456789'
        />
      </div>

      <button className='btn'>Save</button>
    </form>
  );
};
