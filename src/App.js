import React, { Component } from 'react';
import logo from './logo.svg';
// import './styles/App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
// import Search from './components/Search.js'
// import SideList from './components/SideList.js'
import Isi from './pages/page1';
import Isi2 from './pages/page2';
// import Isi3 from './pages/page3';
import Blog from './pages/Blog';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="header"></div>
        <div id="isi"></div> */}
        {/* <Isi/> */}
        {/* <Isi2/> */}
        {/* <Isi3/> */}
        {/* <Search/>
        <SideList/> */}
        <Blog/>
      </div>
    );
  }
}

export default App;