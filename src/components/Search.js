import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../styles/style.css';

class Search extends Component {
  render() {
    return (
      <div className="Search my-4">
        <nav class="navbar sticky-top navbar-light bg-light justify-content-between">
            <form onSubmit={e => { e.preventDefault(); }}  class="form-inline">
                <input class="form-control mr-sm-2" 
                type="text"
                name="search"
                id="search"
                // value={this.props.keyword} 
                placeholder={this.props.placeholder} 
                onChange = {this.props.doSearch}
                />
                <button class="btn btn-outline-success my-2 my-sm-0" >{this.props.title}</button>
            </form>
        </nav>
      </div>
    );
  }
}

export default Search;
