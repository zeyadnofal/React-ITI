import './App.css'
import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {count: 1, title: ''}
  }

  IncreaseNumber = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.count}`).then(response => response.json())
    .then(result => { console.log(result.title)
      this.setState({title: result.title, count: this.state.count + 1})
    })
  }

  DecreaseNumber = (e) => {
    if(this.state.count === 1 ){
      return
    }
    else{
      fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.count}`).then(response => response.json())
        .then(result => { console.log(result.title)
        this.setState({title: result.title, count: this.state.count - 1})
    })
    }
  }

  render(){
    return(
      <div className = "App">
        <h3 style = {{marginTop: '100px'}}>{this.state.title === '' ? 'loading' : this.state.title}</h3>
        <button onClick={this.IncreaseNumber}>Increase</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.DecreaseNumber}>Decrease</button>
      </div>
    )
  }
}

export default App;
