import React, { Component } from "react";
import $ from "jquery"
class Counter extends Component {
    
    // constructor(){
    //   super();
    //   this.c=this.c.bind(this)
    // }
    renderTag(){
      return this.state.nmae.length===0?<p>no elemnt</p>: <ul>{this.state.nmae.map(t=><li key={t}>{t}</li>)}</ul>;
    }
  render() {

    let style = {
      width:"1000px",
      margin: "0 auto",
      float: "none", 
      "margin-bottom": "10px" 

      
    }

   
    let lin = this.props.counter.snippet;
    console.log(lin.resourceId.videoId);
    const r = "https://www.youtube.com/embed/"+lin.resourceId.videoId;
    const rr = "https://www.youtube.com/watch/"+lin.resourceId.videoId;

    console.log(r);


     

   
    return (

      <React.Fragment>
       <div className="card ml-10" style={style}>
       <iframe id="vid" src={r} className="embed-responsive-item" style={{height:"500px"}} allowFullScreen></iframe>
  <div className="card-body">
    <h4 className="card-title text-dark">RGKV TECH CHANNEL <span classNameName="text text-primary">#kannada</span></h4>
    <p className="card-text text-dark">{this.props.counter.snippet.title}</p>
    <a href={rr} className="btn btn-danger"target='_blank'>YouTube link</a>
  </div>
</div>
      </React.Fragment>
    );

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
