import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/3-1-1-contact-us.css';

class Isi3 extends Component {
  render() {
    return (
    <div className="Isi3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-12 left">
                    <div className="warna"></div>
                        <img src={require("../images/logo/logo-alterra-academy-plain@2x.png")} className="logo1"/>
                </div>
                <div className="col-md-6 col-12 right">
                    <h1>Contact Us</h1>
                    <p>Send us a message and we will get back as soon as possible</p>
                    <div>
                        <label className="nama">Name <span style={{color: (255, 0, 51)}}>*</span></label>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><img src={require("../images/ico/ico-user.png")}/></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Your name" aria-label="Name" aria-describedby="basic-addon1"/>
                    </div>
                    <br />
                    <div>
                        <label className="email">Email <span style={{color: (255, 0, 51)}}>*</span></label>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><img src={require("../images/ico/ico-email.png")}/></span>
                        </div>
                        <input type="text" className="form-control" placeholder="username@domain.com" aria-label="Email"
                        aria-describedby="basic-addon1"/>
                    </div>
                    <br />
                    <div>
                        <label className="phonenumber">Phone Number <span style={{color: (255, 0, 51)}}>*</span></label>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><img src={require("../images/ico/ico-phone.png")}/></span>
                        </div>
                        <input type="text" className="form-control" placeholder="08XXXXXXXXXX" aria-label="Phone Number"
                            aria-describedby="basic-addon1"/>
                    </div><br/><br/>
                    <span>National:</span><br/>
                    <div className="dropdown-form-group">        
                        <button className="dropdown-toggle" type="button" aria-labellendby="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Select item...
                        </button>
                    <div>
                        <label className="dropdownMenuButton"><span style={{color: (255, 0, 51)}}></span></label>
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" >Indonesian</a>
                        <a className="dropdown-item" href="#" >Malaysian</a>
                        <a className="dropdown-item" href="#" >Singapore</a>
                        <a className="dropdown-item" href="#" >Japan</a>
                    </div>
                    <br/>
                    <span>Message</span><br/>
                    <textarea name="" id="" cols="60" rows="5" placeholder= "Send a new message..."></textarea>
                    <div className="Submit">    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div> 
                </div>
            </div>        
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
            crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
            crossorigin="anonymous"></script>
            </div>
        </div>
    </div>
    );
  }
}

export default Isi3;
