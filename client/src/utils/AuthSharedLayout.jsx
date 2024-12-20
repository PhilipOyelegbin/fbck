import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../pages/auth/Navbar";

const GeneralSharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </main>
  );
};

export default GeneralSharedLayout;
