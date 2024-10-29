import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getCandidate } from "../components/action";
import Loading from "../../../components/loading";
import { Link } from "react-router-dom";

function CandidatePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleDeleteCandidate = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/candidate/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.ok) {
        toast.success("Deleted Successfully");
        setData((prevData) => prevData.filter((item) => item.id !== id));
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
        const response = await getCandidate();
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
      <h3 className='text-3xl font-bold mb-4'>Candidates</h3>

      {data.length === 0 ? (
        <h5 className='text-center text-blue-600 mb-4'>No data to display</h5>
      ) : (
        <div className='overflow-x-auto'>
          <table className='text-center min-w-full bg-white border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Vote</th>
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id} className='text-sm hover:bg-gray-100'>
                  <td className='py-1 px-2 border-b'>{item.name}</td>
                  <td className='py-1 px-2 border-b'>
                    {item.vote.length || 0}
                  </td>
                  <td className='py-1 px-2 border-b'>
                    <div className='flex gap-2 text-xl'>
                      <Link
                        className='text-blue-500 hover:text-blue-600 duration-300 ease-linear mx-auto'
                        to={`/panel/candidates/update/${item.id}`}>
                        <FaEdit />
                      </Link>
                      <FaTrash
                        onClick={() => handleDeleteCandidate(item.id)}
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

export default CandidatePage;
