import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
import '../styles/blog.css';
import Footer from '../components/Footer.js'
import ListNews from '../components/ListNews'
import axios from 'axios';

//dummy date
import az from "../images/berita1.jpg"
import { async } from 'q';

//News API
const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Romance extends Component {

render() {
    console.log("here render")
    // const news = this.state.ListNews;
    console.log("is_login", this.props.is_login);
    // if(!this.props.is_login){
    //     return <Redirect to={{ pathname: "/signin"}}/>;
    // } else {
    return (
    <div className="Category">
        {/* <Header/> */}
        <div class="container-fluid">
        <div class="row">
        
        <div class="col-md-8">
            {this.props.listNews.map((item,key) =>{
                const src_img = item.Poster === null ? az : item.Poster;
                const content = item.Poster !== null ? item.Synopsis : "";
                return <ListNews key={key} title={item.Title} category={item.Category} img={src_img} content={content}/>;
            })}
        </div>

        
        <div class="col-md-4">

        </div>
        
        </div>
        </div>
        <Footer/>
    </div>
    );
  }}
// }

export default connect("is_login,email,full_name,listNews,listTopNews", actions)
(withRouter(Romance));