import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSideBar";
function App() {
  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar />
      <NewProject></NewProject>
    </main>
  );
}

export default App;
