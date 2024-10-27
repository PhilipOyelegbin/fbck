import { useState, useEffect } from "react";
import { FaEdit, FaPlusSquare, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getUser } from "../components/action";
import Loading from "../../../components/loading";
import { Link } from "react-router-dom";

function UserPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleDeleteUser = async (email) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/users/${email}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.ok) {
        toast.success("Deleted Successfully");
        setData((prevData) => prevData.filter((user) => user.email !== email));
      } else {
        toast.error(response.statusText);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        if (response.ok) {
          const result = await response.json();
          setData(result.data);
        } else {
          setError(response.statusText);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h5 className='text-center text-red-600 mb-4'>Error: {error}</h5>;
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <section className='p-3 bg-white rounded shadow-md'>
      <div className='flex justify-between'>
        <h3 className='text-3xl font-bold mb-4'>Users</h3>
        <Link to='/panel/users/new'>
          <FaPlusSquare className='text-blue-500 text-2xl' />
        </Link>
      </div>

      {data.length === 0 ? (
        <h5 className='text-center text-blue-600 mb-4'>No data to display</h5>
      ) : (
        <div className='overflow-x-auto'>
          <table className='text-center min-w-full bg-white border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='py-2 px-4 border-b'>ID</th>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Email</th>
                <th className='py-2 px-4 border-b'>Date of Birth</th>
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id} className='text-sm hover:bg-gray-100'>
                  <td className='py-1 px-2 border-b'>
                    {item.id.split("-")[0]}...
                  </td>
                  <td className='py-1 px-2 border-b'>{item.name}</td>
                  <td className='py-1 px-2 border-b'>{item.email}</td>
                  <td className='py-1 px-2 border-b'>{item.date_of_birth}</td>
                  <td className='py-1 px-2 border-b'>
                    <div className='flex gap-2 text-xl'>
                      <Link
                        className='text-blue-500 hover:text-blue-600 duration-300 ease-linear mx-auto'
                        to={`/panel/users/update/${item.email}`}>
                        <FaEdit />
                      </Link>
                      <FaTrash
                        onClick={() => handleDeleteUser(item.email)}
                        className='cursor-pointer text-red-500 hover:text-red-600 duration-300 ease-linear mx-auto'
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default UserPage;
