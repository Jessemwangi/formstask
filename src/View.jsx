import React from 'react';
import './View.css'


const View = ({firstname,lastname,telephone,role,messsage}) => {
    return (
        <div className='view'>
            <h2>The following Details will be submited</h2>
          <span>FirsName : {firstname}</span> <br />
          <span>LastName : {lastname}</span> <br />
          <span>Telephone : {telephone}</span> <br />
          <span>Role : {role}</span><br />
          <span>Message : {messsage} </span><br />
        </div>
    );
};

export default View;