import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  
  clickUp = () => {
    this.setState({
      count:this.state.count + 1
   })
  }

  clickDown =()=>{
    this.setState({
      count:this.state.count - 1
   })
  }


  render (){
  return (
    <div className="App">
     <div className='Counter-container'>
       <div className='Counter'>
         {this.state.count}
       </div>
       <div className='Button-container'>
         <button onClick={this.clickDown}>-</button>
         <button onClick={this.clickUp}>+</button>
        </div>
     </div>
    </div>
  );
}
}

export default App;
