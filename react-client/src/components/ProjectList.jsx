import React from 'react';
import ProjectEntry from './ProjectEntry.jsx';

const ProjectList = ({projects}) => (
  <div>
    <h4> Project Component </h4>
    There are { projects.length } items.
    { projects.map((project, index) => <ProjectEntry project={project} key={index}/>)}
  </div>
)

export default ProjectList;