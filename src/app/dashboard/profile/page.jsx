import PasswordUpdate from "./_components/PasswordUpdate";
import UpdateProfile from "./_components/UpdateProfile";

function ProfilePage() {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-5 bg-gray-100 p-5'>
      <UpdateProfile />
      <PasswordUpdate />
    </div>
  );
}

export default ProfilePage;
