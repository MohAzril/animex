import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/style.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer>
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="box">
                        <a class="logo" href="#"><img id="logo" src={require("../images/logo/logo-alterra-academy-plain@2x.png")} width="125px"/></a>
                        <h5 class="copyright">&copy; Copyright Alterra Group 2019</h5>    
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="box">
                        <br/>
                        <ul>
                            <li><h2 id="contact" class="nav-follow" href="#">Follow us On</h2></li>
                            <li><a class="nav-link" href="#"><span><img src={require('../images/ico/ico-facebook.png')}/></span> Facebook</a></li>
                            <li><a class="nav-link" href="#"><span><img src={require("../images/ico/ico-twitter.png")}/></span> Twitter</a></li>
                            <li><a class="nav-link" href="#"><span><img src={require("../images/ico/ico-instagram.png")}/></span> Instagram</a></li>
                        </ul>     
                    </div>
                </div>
            </div>
            </div>
        </footer>
        <script src="../styles/bootstrap.min.js"></script>
      </div>
    );
  }
}

export default Footer;
