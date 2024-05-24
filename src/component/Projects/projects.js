import React from 'react';
import './projects.css';

const Projects = () => {
  return(
    <div id = "projects" className = "projects">
      <button className="button">
        <img src="path/to/project1.jpg" alt="Project 1" />
        <div className="button-text">
          <h3>Test</h3>
          <p>Summary of project 1.</p>
        </div>
      </button>
      <button className="button">
        <img src="path/to/project2.jpg" alt="Project 2" />
        <div className="button-text">
          <h3>Project 2</h3>
          <p>Summary of project 2.</p>
        </div>
      </button>
      <button className="button">
        <img src="path/to/project3.jpg" alt="Project 3" />
        <div className="button-text">
          <h3>Project 3</h3>
          <p>Summary of project 3.</p>
        </div>
      </button>
      <button className="button">
        <img src="path/to/project4.jpg" alt="Project 4" />
        <div className="button-text">
          <h3>Project 4</h3>
          <p>Summary of project 4.</p>
        </div>
      </button>
    </div>
  )
}
export default Projects;