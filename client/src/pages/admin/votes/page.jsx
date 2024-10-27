import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getVote } from "../components/action";
import Loading from "../../../components/loading";

function AdminInvoicePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleDeleteAllVote = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URI}/api/vote`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.ok) {
        toast.success("All vote deleted Successfully");
        setData(!data);
      } else {
        toast.error(response.statusText);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteVoteById = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/vote/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.ok) {
        toast.success("Vote deleted Successfully");
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
        const response = await getVote();
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
      <div className='flex justify-between items-start'>
        <h3 className='text-3xl font-bold mb-4'>Votes</h3>
        <button
          className='px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 duration-300 ease-linear'
          onClick={handleDeleteAllVote}>
          Delete All Vote
        </button>
      </div>

      {data?.length === 0 ? (
        <h5 className='text-center text-blue-600 mb-4'>No data to display</h5>
      ) : (
        <div className='overflow-x-auto'>
          <table className='text-center min-w-full bg-white border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='py-2 px-4 border-b'>ID</th>
                <th className='py-2 px-4 border-b'>User</th>
                <th className='py-2 px-4 border-b'>Candidate</th>
                <th className='py-2 px-4 border-b'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id} className='text-sm hover:bg-gray-100'>
                  <td className='py-1 px-2 border-b'>
                    {item.id.split("-")[0]}...
                  </td>
                  <td className='py-1 px-2 border-b'>{item.userId}</td>
                  <td className='py-1 px-2 border-b'>{item.candidateId}</td>
                  <td className='py-1 px-2 border-b'>
                    <FaTrash
                      onClick={() => handleDeleteVoteById(item.id)}
                      className='cursor-pointer text-xl mx-auto text-red-500 hover:text-red-600 duration-300 ease-linear'
                    />
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

export default AdminInvoicePage;
