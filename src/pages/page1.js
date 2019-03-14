import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
import Footer from '../components/Footer.js'
import '../styles/style.css';

class Isi extends Component {
  render() {
    console.log("is_login", this.props.is_login);
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Isi">
        {/* <Header/> */}
        <div id="banner">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="box">
                    <br/>
                    <br/>
                    {/* <img class="profil" src={this.props.avatar} alt="Card image cap"/> */}
                    <span class="profil" style={{ backgroundImage: "url(" + this.props.avatar + ")"}}></span>
                    <h1 class="nama">{this.props.full_name}</h1>
                    <p class="nama">
                    <label>Email:</label> {this.props.email}
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>

    <Footer/>
    </div>
    );
  }}
}

export default connect("is_login,email,full_name,avatar", actions)
(withRouter(Isi));