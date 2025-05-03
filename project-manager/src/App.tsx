import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectSideBar";
function App() {
  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: null | undefined;
    projects: { id: number; name: string; description?: string }[];
  }>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  interface Project {
    id: number;
    name: string;
    description?: string;
  }

  function handleAddProject(projectData: {
    title: string;
    description: string;
    dueDate: string;
  }): void {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject: Project = {
        id: projectId,
        name: projectData.title,
        description: projectData.description,
      };
      console.log(projectData);
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
