import React, { Component } from 'react';

class Navbar extends Component {
     style = {
      color:"red"
    }
    render() { 
        return ( 
        
          <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-danger" href="#"><i className="fa fa-youtube m-2" style={this.style}></i>RGKV TECH CHANNEL</a> 
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
            </form>

          </div>
        </nav>
      
      );
    }
}
 
export default Navbar;