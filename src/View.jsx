import React from 'react';
import './View.css'


const View = props => {
    return (
        <div className='view'>
            <h2>The following Details will be submited</h2>
          <span>FirsName : {props.firstname}</span> <br />
          <span>LastName : {props.lastname}</span> <br />
          <span>Telephone : {props.telephone}</span> <br />
          <span>Role : {props.role}</span><br />
          <span>Message : {props.messsage} </span><br />
        </div>
    );
};

export default View;