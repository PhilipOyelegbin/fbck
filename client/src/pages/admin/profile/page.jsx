import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { User } from "./components/User";
import { UpdatePassword } from "./components/UpdatePassword";

const Profile = () => {
  return (
    <section className='p-3 rounded-lg space-y-5 bg-slate-200'>
      <div className='flex justify-evenly items-center'>
        <h3>Admin profile</h3>
        <Link to='/panel/profile/new'>
          <FaPlusSquare className='text-xl text-blue-500' />
        </Link>
      </div>
      <div className='bg-inherit flex gap-5 flex-wrap justify-around'>
        <User />
        <UpdatePassword />
      </div>
    </section>
  );
};

export default Profile;
