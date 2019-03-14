import React, {Component} from "react";
// import axios from "axios";
import {withRouter} from "react-router-dom";
import {connect} from 'unistore/react';
import {actions} from '../store';

class SignIn extends Component{
    postLogin = () => {
        this.props.signIn().then(() => {
            console.log("this",this);
            this.props.history.replace("/");
        })
    };
    render() {
        console.log("state", this.props.email);
        return(
            <section className="content signin">
                <form onSubmit={e => e.preventDefault()}>
                    <h4>SignIn</h4>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={e => this.props.setField(e)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => this.props.setField(e)}
                        />
                    </div>
                    <button onClick={() => this.postLogin()}>SignIn</button>
                    <button type="reset">Reset</button>
                </form>
            </section>
        );
    }
}

export default connect("api_key,is_login,full_name,email,username,password",actions)(withRouter(SignIn));