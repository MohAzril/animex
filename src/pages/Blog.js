import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
// import '../styles/blog.css';
// import Footer from '../components/Footer.js'
import Search from '../components/Search.js'
import SideList from '../components/SideList.js'
import ListNews from '../components/ListNews'

//dummy date
import az from "../images/berita1.jpg"
import { async } from 'q';

//News API
// const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
// const baseUrl = "https://newsapi.org/v2/"
// const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
// const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Blog extends Component {

componentDidMount = () =>{
    this.props.cariBerita().then(() => {
    console.log("this",this.props.listNews);
        
    });
}; 

handleInputChange = e => {
    // console.log("event", e.target.value);
    // let value = e.target.value;
    this.props.setField(e);
    this.props.searchNews(e.target.value);
};

handleOnClick = e => {
    console.log("event genre", e.target.value);
    // let value = e.target.value;
    this.props.setField(e);
    this.props.searchNews(e.target.value);
};

render() {
    console.log("here render")
    // const news = this.state.ListNews;
    if (this.props.listNews.length != 0){console.log("listNewsblog", this.props.listNews[0].info[0].$.src)};
    console.log("is_login", this.props.is_login);
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Blog">
        {/* <Header/> */}
        <div class="container-fluid">
        {/* <div className="row text-center">
        <h1 class="my-4 text-center">Animex</h1>
        </div> */}
        <div class="row">
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
                {/* <li class="list-group-item d-flex justify-content-between align-items-center fav">
                    Artikel Favorit
                </li> */}
                <button className="btn btn-primary" name="type" value="anime" onClick={(e)=>this.handleOnClick(e)}>Anime</button>
                <button className="btn btn-primary" name="type" value="manga" onClick={(e)=>this.handleOnClick(e)}>Manga</button><br/>
                {/* {this.props.listTopNews.map((item,key) =>{
                const src_img = item.name === null ? az : item.name;
                const content = item.name !== null ? item.name : "";
                console.log("sidelist");
                return <SideList index={key} title={item.title} img={src_img} content={content}/>;
                })} */}
                </ul>
            </div>
            <button style={{width:"50%"}} className="btn btn-primary" name="genre" value="romance" onClick={(e)=>this.handleOnClick(e)}>Romance</button>
            <button style={{width:"50%"}} className="btn btn-primary" name="genre" value="adventure" onClick={(e)=>this.handleOnClick(e)}>Adventure</button><br/>
            <button style={{width:"33%"}} className="btn btn-primary" name="genre" value="comedy" onClick={(e)=>this.handleOnClick(e)}>Comedy</button>
            <button style={{width:"34%"}} className="btn btn-primary" name="genre" value="drama" onClick={(e)=>this.handleOnClick(e)}>Drama</button>
            <button style={{width:"33%"}} className="btn btn-primary" name="genre" value="fantasy" onClick={(e)=>this.handleOnClick(e)}>Fantasy</button>

            {/* <SideList/> */}
        </div>
        <div class="col-md-8 text-center">
            {/* <div class="card mb-4">
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
            </div>     */}
            {   
                this.props.listNews.map((item,key) =>{
                var text="";
                var rating="";
                var latednews="";
                var genre=[];
                console.log("list full item", this.props.listNews)
                for (var i = 0; i < item.info.length; i++) {
                    console.log("tipe info",item.info[i].$.type);
                    if(item.info[i].$.type=="Plot Summary"){
                    text += item.info[i]._+" ";}
                    if(item.info[i].$.type=="Genres"){
                    // console.log("genre sort",item.info[i]._);
                    // if(item.info[i]._!=this.props.genre){
                    // console.log("genre pilihan filter",this.props.genre);
                    // return}
                    genre.push(item.info[i]._);}
                };
                console.log("genre all", genre)
                if(item.ratings !== undefined){
                for (var i = 0; i < item.ratings.length; i++) {
                console.log("rating",item.ratings[i].$.weighted_score);
                if(item.ratings[i].$.weighted_score !== null){
                rating += item.ratings[i].$.weighted_score;}
                }}
                if(item.news !== undefined){
                console.log("news",item.news[item.news.length-1]);
                latednews=item.news[item.news.length-1]._;
                console.log("news",latednews);
                }
                if (item.info[0].$.src !== undefined) {
                const src_img = item.info[0].$.src
                console.log("Isi komik",text);
                console.log(genre);
                // if(genre.includes("erotica")){return}
                if(genre.includes('erotica') === false){
                return <ListNews new={latednews} genres={genre} index={key} title={item.$.name} rate={rating} img={src_img} content={text}/>;}
                }
            }
                )}
{/* 

                {   
                this.props.listTopNews.map((item,key) =>{
                var text="";
                var rating="";
                var latednews="";
                var genre=[];
                console.log("list full item", this.props.listTopNews)
                for (var i = 0; i < item.info.length; i++) {
                    console.log("tipe info",item.info[i].$.type);
                    if(item.info[i].$.type=="Plot Summary"){
                    text += item.info[i]._+" ";}
                    if(item.info[i].$.type=="Genres"){
                    // console.log("genre sort",item.info[i]._);
                    // if(item.info[i]._!=this.props.genre){
                    // console.log("genre pilihan filter",this.props.genre);
                    // return}
                    genre.push(item.info[i]._);}
                };
                console.log("genre all", genre)
                if(item.ratings !== undefined){
                for (var i = 0; i < item.ratings.length; i++) {
                console.log("rating",item.ratings[i].$.weighted_score);
                if(item.ratings[i].$.weighted_score !== null){
                rating += item.ratings[i].$.weighted_score;}
                }}
                if(item.news !== undefined){
                console.log("news",item.news[item.news.length-1]);
                latednews=item.news[item.news.length-1]._;
                console.log("news",latednews);
                } 
                const src_img = item.info[0].$.src === null ? az : item.info[0].$.src;
                console.log("Isi komik",text);
                console.log(genre);
                if(genre.includes("erotica")){return}
                // if(genre.includes(this.props.genre)){
                return <SideList new={latednews} genres={genre} index={key} title={item.$.name} rate={rating} img={src_img} content={text}/>;}
                // }
                )} */}
            {/* }} */}
        </div>
        
        </div>
        </div>
        {/* <Footer/> */}
    </div>
    );
  }}
}

export default connect("is_login,email,full_name,listNews,listTopNews,genre", actions)
(withRouter(Blog));