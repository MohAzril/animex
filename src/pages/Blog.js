import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
import '../styles/blog.css';
import Footer from '../components/Footer.js'
import Search from '../components/Search.js'
import SideList from '../components/SideList.js'
import ListNews from '../components/ListNews'

//dummy date
import az from "../images/berita1.jpg"
import { async } from 'q';

//News API
const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Blog extends Component {

componentDidMount = () =>{
    this.props.cariBerita().then(() => {
        console.log("this",this);
    });
}; 

handleInputChange = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
    this.props.setField(e);
    this.props.searchNews(e.target.value);
};

render() {
    console.log("here render")
    // const news = this.state.ListNews;
    console.log("is_login", this.props.is_login);
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Blog">
        {/* <Header/> */}
        <div class="container-fluid">
        <div class="row">
        
        <div class="col-md-8">
            <h1 class="my-4">Laba-laba Beracun <small> Dibakar Hidup-Hidup</small></h1>
            <div class="card mb-4">
                <img class="card-img-top" src={require("../images/berita1.jpg")} alt="Card image cap"/>
                <div class="card-body">
                    <h2 class="card-title">Post Title</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" class="btn btn-primary">Read More &rarr;</a>
                </div>
                <div class="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                </div>    
            </div>    
            {this.props.listNews.map((item,key) =>{
                const src_img = item.Poster === null ? az : item.Poster;
                const content = item.Poster !== null ? item.Synopsis : "";
                return <ListNews key={key} title={item.Title} category={item.Category} img={src_img} content={content}/>;
            })}
        </div>

        
        <div class="col-md-4">
            {/* <Search/> */}
            <Search 
            title="Cari" 
            placeholder="type keyword.."
            doSearch={this.handleInputChange}
            // keyword={this.props.search}
            />
            <div className="SideList">
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center fav">
                    Artikel Favorit
                </li>
                {this.props.listTopNews.map((item,key) =>{
                const src_img = item.urlToImage === null ? az : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <SideList index={key} title={item.title} img={src_img} content={content}/>;
                })}
                </ul>
            </div>
            {/* <SideList/> */}
        </div>
        
        </div>
        </div>
        <Footer/>
    </div>
    );
  }}
}

export default connect("is_login,email,full_name,listNews,listTopNews", actions)
(withRouter(Blog));