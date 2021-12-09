import React, { Component } from 'react';
import InputForm from './components/inputForm.js'

class App extends Component {
  constructor() {
    super();

      this.state = {
          firstName:'first-name',
          lastName:'last-name',
          email:'email@email.com',
          phone:'0123456789',
          address:'123 Road Street, Town City, Earth 69420',
          education:[{name:'education-name',
        title:'education-title',
        startDate:'education-start-date',
        endDate:'education-end-date'
        }],
          experience:[{name:'experience-name',
          title:'experience-title',
          tasks:'experience-tasks',
          startDate:'experience-start-date',
          endDate:'experience-end-date'
          }]
      };
    }

    //Identity
  handleIdentityChange = (e) => {
    const value = e.target.value;
    this.setState({
        ...this.state,
        [e.target.name]:value
    });
  }

  //Education
  handleEducationChange = (e) => {
    const value = e.target.value;
    const index = e.target.getAttribute("index");

    let newEducation = this.state.education;
    newEducation[index] = {
      ...this.state.education[index],
      [e.target.name]:value
    };   

    this.setState({
      ...this.state,
      education:newEducation
  });

  }

  addEducation = (e) => {
    if(this.state.education.length<3){
      let newEducation = this.state.education;
      newEducation.push({name:'',title:'',startDate:'',endDate:''})
      this.setState({
        ...this.state,
        education:newEducation
    });
    }
  };

  deleteEducation = (e) => {
    if(this.state.education.length>1){
      let newEducation = this.state.education;
      newEducation.pop();
      this.setState({
        ...this.state,
        education:newEducation
    });
    }
  };

  //Experience
  handleExperienceChange = (e) => {
    const value = e.target.value;
    const index = e.target.getAttribute("index");

    let newExperience = this.state.experience;
    newExperience[index] = {
      ...this.state.experience[index],
      [e.target.name]:value
    };   

    this.setState({
      ...this.state,
      experience:newExperience
  });

  }

  addExperience = (e) => {
    if(this.state.experience.length<3){
      let newExperience = this.state.experience;
      newExperience.push({name:'',title:'',tasks:'',startDate:'',endDate:''})
      this.setState({
        ...this.state,
        experience:newExperience
    });
    }
  };

  deleteExperience = (e) => {
    if(this.state.experience.length>1){
      let newExperience = this.state.experience;
      newExperience.pop();
      this.setState({
        ...this.state,
        experience:newExperience
    });
    }
  };
    
  render(){

    return (
      <div className="App">
      <InputForm state={this.state} 
      handleIdentityChange={this.handleIdentityChange}
      handleEducationChange={this.handleEducationChange}
      addEducation={this.addEducation}
      deleteEducation={this.deleteEducation}
      handleExperienceChange={this.handleExperienceChange}
      addExperience={this.addExperience}
      deleteExperience={this.deleteExperience}
      >
      </InputForm>
    </div>
    );
  }
  
}

export default App;
