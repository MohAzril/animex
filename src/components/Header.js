import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from "react-router-dom";

// import '../styles/style.css';


const Header = props => {
    return (
        <div>
            {/* <img src={require("../images/img/heroLogo.png")} style={{width:"17%"}}/> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link className="navbar-brand" to="/">Animex</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tipe
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/">Anime</Link>
                                <Link className="dropdown-item" to="/">Movie</Link>
                                <Link className="dropdown-item" to="/">AOV</Link>
                                <Link className="dropdown-item" to="/">Manga</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Selengkapnya</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Login<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => props.postSignout()}>SignOut<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;

// const Header = props => {
//     return (
//     <div className="Header">
//         <header>
//         <div class="container-fluid">
//             <div class="row">
//                 <div class="col-md-6 col-sm-12 left">
//                     <div class="box">
//                         <a href="#"><img id="logo" src={require("../images/logo/logo-alterra-academy.png")} width="125px"/></a>   
//                     </div>
//                 </div>
//                 <div class="col-md-6 col-sm-12 right">
//                     <div class="box">
//                         <nav>
//                             <ul id="topmenu">
//                                 <li className="menu">
//                                     <Link to="/">Home</Link>
//                                 </li>
//                                 <li className="menu">
//                                     <Link to="/signin">SignIn</Link>
//                                 </li>
//                                 <li className="menu">
//                                     <Link to="/profile">Profile</Link>
//                                 </li>
//                                 <li className="menu">
//                                     <Link to="/" onClick={() => props.postSignout()}>
//                                     SignOut
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </header>
//     </div>
//     );
// }
