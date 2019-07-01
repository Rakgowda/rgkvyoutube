import React, { Component } from 'react';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

class Navbar extends Component {
   
  constructor(){
    super();
    
  }

  handleChange=(event)=>{
    this.props.searchdata(event.target.value);
  }
    


    render() { 
      let style;
    if (window.innerWidth > 600) {
      style = {
        fontSize:"20px" 
 
      }
    
    } else {
      style = {
        fontSize:"11px"
      }
      
    }
     
        return ( 
        
          
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
           <a class="navbar-brand" style={style}><i className="fa fa-youtube m-2" style={{color:"red"}}></i>RGKV TECH CHANNEL <span className="badge badge-pill badge-warning" style={{fontSize:"10px"}}>Subscribers {this.props.subcriber}</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> */}
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
              </form>
  </div>
</nav>

      );
    }
}
 
export default Navbar;