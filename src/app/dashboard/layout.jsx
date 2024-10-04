import Sidebar from "./_components/Sidebar";

export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <article>{children}</article>;
    </>
  );
}
