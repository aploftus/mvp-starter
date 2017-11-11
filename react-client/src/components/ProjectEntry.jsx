import React from 'react';

let ProjectEntry = ({project}) => (
  <div>
    <div>{ project.title }</div>
    <div>{ project.city }</div>
    <div>{ project.state }</div>
    <div>{ project.expirationDate }</div>
    <div>{ project.costToComplete }</div>
  </div>
)

export default ProjectEntry;