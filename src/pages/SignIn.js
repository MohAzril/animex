import React, { Component } from "react";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class SignIn extends Component {
    postLogin = () => {
        this.props.signIn().then(() => {
            console.log("this", this);
            this.props.history.replace("/profile");
        })
    };
    render() {
        console.log("state", this.props.email);
        return (
            <section className="content signin text-center">
                <form onSubmit={e => e.preventDefault()}>
                    <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Sign In</h1>
                    <img src={require("../images/img/heroLogo.png")} style={{width:"20%", margin:"2%"}}/>
                    {/* <img src={require("../images/img/background-auntum.jpg")} style={{width:"100%"}}/> */}
                    <div style={{ marginBottom: "2%" }}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                        <br /> <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                    </div>
                    <button style={{ marginRight: "2%" }} onClick={() => this.postLogin()} className="btn btn-outline-primary">SignIn</button>
                    <button type="reset" className="btn btn-outline-primary">Reset</button>
                </form>
            </section>
        );
    }
}

export default connect("api_key,is_login,full_name,email,username,password", actions)(withRouter(SignIn));