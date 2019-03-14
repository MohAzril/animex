import React, {Component} from "react";
import MainRoute from "./Routes/MainRoute";
import {connect} from "unistore/react";
import {actions} from "./store";
import {withRouter} from "react-router-dom";
// App styles
// import "./styles/App.css";
//Custom components
import Header from "./components/Header";

class AppRouter extends Component{
    postSignout = () =>{
        this.props.signOut()
        // localStorage.setItem("is_login",true);
        this.props.history.push("/");
    };
    render(){
        return (
            <div className="App">
                <Header postSignout={this.postSignout}/>
                <MainRoute/>
            </div>
        );
    }
}

export default connect("is_login,email,full_name,listNews,listTopNews", actions)
(withRouter(AppRouter));