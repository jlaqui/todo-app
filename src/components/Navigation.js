import React from 'react';

function Navigation(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <p className="text-white ml-4">
        {props.title}
        <span className="badge badge-pill bg-light text-dark ml-2">
          {props.tasks}
        </span>
      </p>
    </nav>
  );
}
export default Navigation;
