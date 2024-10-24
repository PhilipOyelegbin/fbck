import { useEffect } from "react";
import Datapool from "./components/Datapool";
import { jwtDecode } from "jwt-decode";

export default function DashboardPage() {
  useEffect(() => {
    const decode = jwtDecode(sessionStorage.getItem("token"));
    sessionStorage.setItem("user", decode.email);
    sessionStorage.setItem("userId", decode.id);
  }, []);

  return (
    <section className='space-y-5'>
      <Datapool />
    </section>
  );
}
