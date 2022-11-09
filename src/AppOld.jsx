
import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {

  state = {
    note: {
      firstname: '',
      lastname: '',
      telephone: '',
      role: '',
      messsage: '',
    },
    showPopUp: false
  };

  inputHandler = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value }
    })
  }


  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      showPopUp: !this.state.showPopUp
    })
  }


  reset = () => {
    this.setState({
      showPopUp:false,
     note:{...''}
    })
  }

  render() {
    let Rtn;
    if (!this.state.showPopUp){

      Rtn = (<div><Form change={this.inputHandler}
        submit={this.submitHandler}
       {...this.state.note}/> <View { ...this.state.note }/></div>)
    }
    else{
    Rtn = (<Popup firstname={this.state.note.firstname}
      lastname={this.state.note.lastname}
      telephone={this.state.note.telephone}
      role={this.state.note.role}
      reset ={this.reset}
      savesend ={this.submitHandler} /> )}
    return (
      <div className="App">
        {Rtn}

{/* 

         <Popup firstname={this.state.note.firstname}
          LastName={this.state.note.lastname}
          Telephone={this.state.note.telephone}
          Role={this.state.note.role} />  */}


      </div>
    );
  }
}


export default App;