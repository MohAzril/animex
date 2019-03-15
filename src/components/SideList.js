// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import '../styles/style.css';
// import '../styles/blog.css';

// const SideList =props => {  
//   return (
//     <div className="top-rated">
//       <li class="list-group-item d-flex justify-content-between align-items-center">
//       {props.title}
//         <span class="badge badge-primary badge-pill">{props.index+1}</span>
//       </li>
//     </div>
//   );
// }


// export default SideList;

import React, { Component } from 'react';
import PropTypes from "prop-types";
// import logo from './logo.svg';
// import '../styles/style.css';
import '../styles/blog.css';
// const style ={
//   maxWidth: "200px"
// };

const ListTopNews = props => {
  const content = props.content.slice(0,250)
  // console.log("latednews",props.new)

  return (
      <section className="content">
        {/* <h1>{props.title}</h1>
        <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />
        <div className="right">{props.content}</div> */}
        <div className="col-md-4">
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
        </div>
      </section>
  );
};

export default ListTopNews;
