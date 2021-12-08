import React, { Component } from 'react';
import InputForm from './components/inputForm.js'

class App extends Component {
  constructor() {
    super();

      this.state = {
        identity:{
          firstName:'first-name',
          lastName:'last-name',
          email:'email@email.com',
          phone:'0123456789',
          address:'123 Road Street, Town City, Earth 69420'
        }
      };
    }

  handleChange = (e) => {
    this.setState({
        identity : {
          firstName:'first-name-changed',
          lastName:'last-name',
          email:'email@email.com',
          phone:'0123456789',
          address:'123 Road Street, Town City, Earth 69420'
        }
    });
    console.log(this.state);
  }
    
  render(){
    const { identity } = this.state;

    return (
      <div className="App">
      <InputForm identity={identity} handleChange={this.handleChange}>
      </InputForm>
    </div>
    );
  }
  
}

export default App;
