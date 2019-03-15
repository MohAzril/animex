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

class Category extends Component {
constructor(props){
    super(props);
    this.state = {
        listNews:[],
        listTopNews:[],
        username:"",
        isLogin:false,
        // value:'',
        search:""
    };
}

componentDidMount = () =>{
    this.props.cariBerita().then(() => {
        console.log("this",this);
    });
}; 

handleOnClick = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
    // this.props.setField(e);
    this.props.searchNews(e.target.value);
    this.props.history.replace("/"+e.target.value);
};

render() {
    console.log("here render")
    // const news = this.state.ListNews;
    console.log("is_login", this.props.is_login);
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Category">
        {/* <Header/> */}
        <div class="container-fluid">
        <div class="card-deck my-4">
            <div class="card">
                <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Romance</h5>
                <button className="btn btn-primary" name="search" value="romance" onClick={(e)=>this.handleOnClick(e)}>naruto</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Action</h5>
                <button className="btn btn-primary" name="search" value="action" onClick={(e)=>this.handleOnClick(e)}>one_piece</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Fiction</h5>
                <button className="btn btn-primary" name="search" value="fiction" onClick={(e)=>this.handleOnClick(e)}>fiction</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Comedy</h5>
                <button className="btn btn-primary" name="search" value="comedy" onClick={(e)=>this.handleOnClick(e)}>comedy</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
    );
  }}
}

export default connect("is_login,email,full_name,listNews,listTopNews", actions)
(withRouter(Category));