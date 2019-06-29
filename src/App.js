
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Navbar from "./components/navbar"
import React, { Component } from 'react';

import $ from 'jquery'

class App extends Component {
  state = {  
    counterr:[]
}
constructor(){
  super();
  
}
habdleDElete=(cid)=>{
    let counnter = this.state.counterr.filter(e=> e.id != cid);
    this.setState({counterr:counnter})
    
    
}
incre=(id)=>{
    
    let counterr =[...this.state.counterr]
    let index = counterr.indexOf(id)
    counterr[index].value= counterr[index].value+1;
    this.setState(counterr)
    
}
reset=()=>{
    let counterr = [...this.state.counterr]
    counterr.map(e=>{e.value=0})
    this.setState(counterr)
}

componentDidMount(){
 
  $.get( "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUnw-TdFO6KgTWTxBatPWDMw&key=AIzaSyDqnf8FL1kPg2MNRPySnf54fJaU-8W_zz0", (data)=> {
 
    const counterr = data.items
  this.setState({counterr:[...counterr]})
  console.log(this.state);
   

  });
}
render() { 
  return ( 
    <React.Fragment>
      <Navbar></Navbar>
      <Counters counterr={this.state.counterr}></Counters>
    </React.Fragment>
  );
}
}

export default App;
