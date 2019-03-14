import React, { Component } from 'react';
import PropTypes from "prop-types";
// import logo from './logo.svg';
// import '../styles/style.css';
import '../styles/blog.css';
// const style ={
//   maxWidth: "200px"
// };

const ListNews = props => {
  return (
      <section className="content">
        {/* <h1>{props.title}</h1>
        <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />
        <div className="right">{props.content}</div> */}
        <h1 class="my-4">{props.title}</h1>
        <div class="card mb-4">
          <img class="card-img-top" src={props.img} alt="Card image cap"/>
          <div class="card-body">
            <h2 class="card-title">Post Title</h2>
            <p class="card-text">{props.content}</p>
            <a href="#" class="btn btn-primary">Read More &rarr;</a>
          </div>
          <div class="card-footer text-muted">
            Category:
            <a href="#">{props.category}</a>
          </div>    
        </div>    
      </section>
  );
};

export default ListNews;
