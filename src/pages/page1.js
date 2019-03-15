import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';

class Isi extends Component {
  componentDidMount = () => {
        // this.props.getCategory()
        this.props.getWeather()
    }
  
  render() {
    console.log("THIS IS", this.props.weather)
    if (this.props.weather < 500){
        this.props.setBg("https://cdn.wallpaperjam.com/content/images/1f/b7/1fb7056aa4c42a34475c255dba966516ed462c2c.jpg")
    } else if (this.props.weather<800){
        this.props.setBg("https://coubsecure-s.akamaihd.net/get/b179/p/coub/simple/cw_timeline_pic/bd4d63678e6/77b8dd0e17172464eb740/big_1504034290_image.jpg")
    } else if (this.props.weather>=800){
        this.props.setBg("https://mocah.org/uploads/posts/4511544-makoto-shinkai-kimi-no-na-wa.png")
    }
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Isi">
        {/* <Header/> */}
        <div id="banner">
        {/* <div class="container-fluid"> */}
        {/* <div class="row"> */}
            {/* <div class="col-md-12 col-sm-12"> */}
            {console.log("yang muncul", this.props.bg)}
                <div class="box text-align-center"
                style={{backgroundImage: "url("+ this.props.bg  +")"}}>
                {/* <div class="img-banner" style="{'background-image': 'url(' + require('./assets/media/baner1.jpg') + ')'}"></div> */}
                    <br/>
                    <br/>
                    {/* <img class="profil" src={this.props.avatar} alt="Card image cap"/> */}
                    <p className="nama" style={{fontSize:"24px"}}>Welcome Back {this.props.full_name} :)</p>
                    <span class="profil" style={{ backgroundImage: "url(" + this.props.avatar + ")"}}></span>
                    <h1 class="nama">{this.props.full_name} {this.props.surname}</h1>
                    <h6 class="nama">{this.props.gender} {this.props.age}</h6>
                    <h5 class="nama">{this.props.region}</h5>
                    {/* <img src={require("../images/img/background-auntum.jpg")} style={{width:"100%"}}/> */}
                    <h1>{this.id}</h1>
                </div>
            {/* </div> */}
        {/* </div> */}
        {/* </div> */}
    </div>
    </div>
    );
  }}
}

export default connect("is_login,surname, region, age, gender, full_name, bg, avatar, weather", actions)
(withRouter(Isi));
