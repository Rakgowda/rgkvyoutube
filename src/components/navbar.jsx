import React, { Component } from 'react';

class Navbar extends Component {
     style = {
      color:"red"
    }
    render() { 
        return ( 
        
          <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
           <a class="navbar-brand" href="#"><i className="fa fa-youtube m-2" style={this.style}></i>RGKV TECH CHANNEL</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        
          <div className="collapse navbar-collapse" id="navbarTognavbarSupportedContentglerDemo01">
        
            <div class="navbar-nav ml-auto">
            <form class="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>

          </div>
     
        </nav>
  
      
      );
    }
}
 
export default Navbar;