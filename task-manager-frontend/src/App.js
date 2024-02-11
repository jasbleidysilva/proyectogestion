import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data.projects))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const addProject = async (project) => {
    try {
      const response = await axios.post('http://localhost:5000/api/projects', { project });
      setProjects([...projects, project]);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="App">
      <h1>Project Manager</h1>
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
