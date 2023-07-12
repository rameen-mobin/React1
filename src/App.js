import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

/* function App() {
  //  var x = 0;
  const [count, setCounter] = React.useState(0)
  
   const handleClick= () => {
  
      setCounter(count+1)
      console.log("Clicked")
      console.log(count);
   }
  return (
    <div className="App">
      <h1>Hello World</h1>

      <button> Increment</button>
    </div>
  );
} */

class App extends Component{
  
  // do not need to explicitly declare it
  // even if we change the sequence of constructor and render func
  // they would still be called in the set lifecycle seq
  // constructor --> render --> update --> unmount
  constructor(){
    super();
    console.log("constructor is called")
    // state is internal DS
    // used for data that changes overtime, eg user i/o, API response, UI interaction
    //updating state tells react to re-render the element 
    // initialized in the constructor
    this.state = {
      data: 'Hello',
      show: false
    }
    this.addAnO = this.addAnO.bind(this)
    this.removeChild = this.removeChild.bind(this)
  }
  
  // function called when everything is mounted --> after rendering
  // any api or component updation occurs here and after that render is called again
  // called only once! after the first render
  // used for initialization and stuff
  componentDidMount(){
    console.log("componentDidMount() function called")
    this.setState({data:'Hello'})
  }
  // called everytime component updates except initally
  componentDidUpdate(){
    console.log("componentDidUpdate() is called");
    
  }
  
  addAnO(){
    console.log("HEllo")
    this.setState({data: this.state.data + 'o'})
  }
  removeChild(){
    console.log("Hello")
    this.setState({show: !this.state.show})
  }
  // in render func the JSX code is wrtten
  render(){ 
    console.log("render is called")
    return (<div>
              <h1>{this.state.data}</h1>
              {this.state.show ? <Child/> : null}
              <button onClick={this.addAnO}>Add an "O"</button>
              <button onClick={this.removeChild}>Toggle Child</button>

            </div>
          )
  
    
  }
  
}

class Child extends Component{

  // called when an element has to disappear from the DOM
  componentWillUnmount(){
    console.log("componentWillUnmount() is called");
  }
  render(){ 
    
    return (<div>
              <h1>World</h1>
            </div>
          )
  }
}

export default App;
