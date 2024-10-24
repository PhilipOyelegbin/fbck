import CreateService from "./components/CreateCandidate";
import Panel from "./components/Panel";

function AdminPanelPage() {
  return (
    <section className='space-y-5'>
      <Panel />
      <CreateService />
    </section>
  );
}

export default AdminPanelPage;
