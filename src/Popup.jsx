import React from 'react';
import './Form.css'
import './View.css'

const Popup = (props) => {
    return (
        <div className='view'>
       
            <h1>this is your input</h1>
          <span>FirsName : {props.firstname}</span> <br />
          <span>LastName : {props.lastname}</span> <br />
          <span>Telephone : {props.telephone}</span> <br />
          <span>Telephone : {props.role}</span> <br />
          <span>mesaage : {props.messsage}</span><br/>
          <button onClick={props.reset}>Reset</button>
          <button onClick={props.savesend}>Send</button>
        </div>
   
        
    );
};

export default Popup;