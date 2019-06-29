import React, { Component } from 'react';

import Counter from "./counter"

class Counters extends Component {
    
    render() { 
        console.log(this.props.counterr);
        return ( <div>
            
           {/* <button className="btn btn-primary m2" onClick={this.props.reset}> Reset</button> */}
            {this.props.counterr.map(e=><Counter key={e.id} counter={e}>
           
            </Counter>)}

        </div> );
    }
}
 
export default Counters;