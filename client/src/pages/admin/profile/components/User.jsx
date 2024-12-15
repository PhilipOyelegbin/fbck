import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const storedUser = localStorage?.getItem("user");
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/v1/admin/${storedUser}`,
        {
          method: "PATCH",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    const storedUser = localStorage?.getItem("user");
    fetch(`${import.meta.env.VITE_API_URI}/api/v1/admin/${storedUser}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((resp) => resp.json())
      .then((result) =>
        setUser({
          name: result?.data.name || "",
          email: result?.data?.email || "",
          phone_number: result?.data?.phone_number || "",
        })
      )
      .catch((error) => toast.error(error));
  }, []);

  return (
    <form onSubmit={handleUpdate} className='auth-form lg:w-1/2 p-5 rounded-md'>
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
