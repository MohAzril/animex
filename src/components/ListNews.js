import React, { Component } from 'react';
import PropTypes from "prop-types";
// import logo from './logo.svg';
// import '../styles/style.css';
import '../styles/blog.css';
// const style ={
//   maxWidth: "200px"
// };

const ListNews = props => {
  const content = props.content.slice(0,250)
  // console.log("latednews",props.new)

  return (
      <section className="content">
        {/* <h1>{props.title}</h1>
        <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />
        <div className="right">{props.content}</div> */}
        <h1 class="my-4">{props.title}</h1>
        <div class="card mb-4">
          <img class="card-img-top" src={props.img} alt="Card image cap" style={{width:"300px"}}/>
          <div class="card-body">
            <h2 class="card-title">Rating: {props.rate}</h2>
            <p class="card-text">{content}...</p>
            <a href="#" class="btn btn-primary">Genre: {props.genres.toString()}&rarr;</a>
          </div>
          <div class="card-footer text-muted">
            Latednews:
            <a href="#">{props.new}</a>
          </div>    
        </div>    
      </section>
  );
};

export default ListNews;
