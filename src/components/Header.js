import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from "react-router-dom";

import '../styles/style.css';

// class Header extends Component {
//   render() {
//     return (
//       <div className="Header">
//         <header>
//           <div class="container-fluid">
//               <div class="row">
//                 <div class="col-md-6 col-sm-12 left">
//                     <div class="box">
//                         <a href="#"><img id="logo" src={require("../images/logo/logo-alterra-academy.png")} width="125px"/></a>   
//                     </div>
//                 </div>
//                 <div class="col-md-6 col-sm-12 right">
//                     <div class="box">
//                         <nav>
//                             <ul>
//                                 <li>
//                                     <a class="active" href="#about">ABOUT</a>
//                                     {/* <Link to="/">Home</Link> */}
//                                 </li>
//                                 <li>
//                                     <a href="./gallery.html" target="_blank">GALLERY</a>
//                                 </li>
//                                 <li>
//                                     <a href="./3-1-1-contact-us.html" target="_blank">CONTACT</a>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//               </div>
//           </div>
//       </header>
//       </div>
//     );
//   }
// }

const Header = props => {
    return (
    <div className="Header">
        <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-sm-12 left">
                    <div class="box">
                        <a href="#"><img id="logo" src={require("../images/logo/logo-alterra-academy.png")} width="125px"/></a>   
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 right">
                    <div class="box">
                        <nav>
                            <ul id="topmenu">
                                <li className="menu">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu">
                                    <Link to="/signin">SignIn</Link>
                                </li>
                                <li className="menu">
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li className="menu">
                                    <Link to="/" onClick={() => props.postSignout()}>
                                    SignOut
                                    </Link>
                                </li>
                                <li className="menu">
                                    <Link to="/news">News</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
    );
}

export default Header;
