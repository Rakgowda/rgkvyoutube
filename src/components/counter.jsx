import React, { Component } from "react";
import $ from "jquery"
import Skeleton from 'react-loading-skeleton';


class Counter extends Component {
    
    // constructor(){
    //   super();
    //   this.c=this.c.bind(this)
    // }
 
  render() {
let style;
    if (window.innerWidth > 600) {
       style = {
        width:"1000px",
        margin: "0 auto",
        float: "none", 
        "margin-bottom": "10px" 
 
      }
      let sy=500
    } else {
       style = {
        width:"400px",
        height:"400px",
        margin: "0 auto",
        float: "none", 
        "margin-bottom": "10px" 
      }
      let sy=100
    }
    
   
     console.log(this.props.counter);
    if(this.props.counter =="error" || this.props.counter == "empty")
    {
      return (
   
  <div>
    <div style={style} className="card ml-10">
    <div id="vid" className="embed-responsive-item" style={{height:"500px"}}>
    <Skeleton style={{height:"500px"}}/>
    <div class="spinner-border text-primary position-relative" style={{top:"50%",left:"50%"}}></div>

    </div>

   

    
  
<div className="card-body">
<h4 className="card-title text-dark"><Skeleton count={1} /></h4>
<br/>
<p className="card-text text-dark"><Skeleton count={1} /></p>
<br/>
<a target='_blank'><Skeleton count={1} /></a>
</div>
</div>
</div>
      )
    } 
   else{
    let lin = this.props.counter.snippet;
    console.log(lin.resourceId.videoId);
    const r = "https://www.youtube.com/embed/"+lin.resourceId.videoId+"?rel=0";
    const rr = "https://www.youtube.com/watch/"+lin.resourceId.videoId;


    return (

      <React.Fragment>
       <div className="card ml-10" style={style}>
       
        
         <iframe id="vid" src={r} className="embed-responsive-item" style={{height:"500px"}} allowFullScreen>

         </iframe>
        
  <div className="card-body">
    <h4 className="card-title text-dark">RGKV TECH CHANNEL <span className="text text-primary">#kannada</span></h4>
    <p className="card-text text-dark">{this.props.counter.snippet.title}</p>
    <a href={rr} className="btn btn-danger"target='_blank'>YouTube link</a>
  </div>
</div>
      </React.Fragment>
    );
   }
    

  }
  newMethod() {
    let classNamee = "btn m-2 btn-";
    classNamee += this.props.counter.value === 0 ? "warning" : "primary";
    return classNamee;
  }

  
  formCount(){
      
      return this.props.counter.value === 0?"Z":this.props.counter.value;
  }
}

export default Counter;
