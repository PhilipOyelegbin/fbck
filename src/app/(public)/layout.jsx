import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <article>{children}</article>
      <Footer />
    </>
  );
}
