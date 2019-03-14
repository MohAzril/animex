import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../styles/style.css';
import '../styles/blog.css';

const SideList =props => {  
  return (
    <div className="top-rated">
      <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.title}
        <span class="badge badge-primary badge-pill">{props.index+1}</span>
      </li>
    </div>
  );
}


export default SideList;
