import React from 'react';

function ProjectList({ projects }) {
  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;