import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";

class Profile extends Component {
    render(){
    console.log("is_login", this.props.is_login);

    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
        return(
            <section className="content">
                <h1
                    style={{
                        textalign:"center"
                    }}>
                    Profile
                </h1>
                
                <img style={{height:500}} src={this.props.avatar} alt="Card image cap"/>
                <p>
                    <label>Email:</label> {this.props.email}
                </p>
                <p>
                <label>Full Name:</label> {this.props.full_name}
                </p>
            </section>
        );
    }
}
}

export default connect("is_login,email,full_name,avatar", actions)
(withRouter(Profile));