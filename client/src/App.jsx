import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProtectedRoutes from "./utils/UserProtectedRoutes";
import AdminProtectedRoutes from "./utils/AdminProtectedRoutes";
import GeneralLayout from "./utils/GeneralSharedLayout";
import AuthLayout from "./utils/AuthSharedLayout";
import DashboardLayout from "./utils/DashboardSharedLayout";
import AdminLayout from "./utils/AdminSharedLayout";
import Loader from "./components/loading";

// general routes
const Home = lazy(() => import("./pages/general/home/page"));
const About = lazy(() => import("./pages/general/about/page"));
const Contact = lazy(() => import("./pages/general/contact/page"));
const Login = lazy(() => import("./pages/auth/login/page"));
const Register = lazy(() => import("./pages/auth/register/page"));
// dashboard routes
const Dashboard = lazy(() => import("./pages/dashboard/home/page"));
const Candidates = lazy(() => import("./pages/dashboard/candidate/page"));
const Profile = lazy(() => import("./pages/dashboard/profile/page"));
// pasword reset
const ResetPassword = lazy(() => import("./pages/resetpassword/page"));
const UpdatePassword = lazy(() =>
  import("./pages/resetpassword/updatepassword/page")
);
// admin routes
const Admin = lazy(() => import("./pages/admin/page"));
const Panel = lazy(() => import("./pages/admin/home/page"));
const User = lazy(() => import("./pages/admin/users/page"));
const UpdateUser = lazy(() => import("./pages/admin/users/update/page"));
const CreateUser = lazy(() => import("./pages/admin/users/new/page"));
const Candidate = lazy(() => import("./pages/admin/candidates/page"));
const UpdateCandidate = lazy(() =>
  import("./pages/admin/candidates/update/page")
);
const Vote = lazy(() => import("./pages/admin/votes/page"));
const AdminProfile = lazy(() => import("./pages/admin/profile/page"));
const CreateAdmin = lazy(() => import("./pages/admin/profile/new/page"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<GeneralLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/resetpassword/:token' element={<UpdatePassword />} />
        </Route>
        <Route element={<UserProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/candidates' element={<Candidates />} />
            <Route path='/dashboard/profile' element={<Profile />} />
          </Route>
        </Route>
        <Route element={<AdminProtectedRoutes />}>
          <Route path='/panel' element={<AdminLayout />}>
            <Route index element={<Panel />} />
            <Route path='/panel/users' element={<User />} />
            <Route path='/panel/users/update/:email' element={<UpdateUser />} />
            <Route path='/panel/users/new' element={<CreateUser />} />
            <Route path='/panel/candidates' element={<Candidate />} />
            <Route
              path='/panel/candidates/update/:id'
              element={<UpdateCandidate />}
            />
            <Route path='/panel/votes' element={<Vote />} />
            <Route path='/panel/profile' element={<AdminProfile />} />
            <Route path='/panel/profile/new' element={<CreateAdmin />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

export default App;
