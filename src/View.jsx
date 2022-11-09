import React from 'react';


const View = props => {
    return (
        <div>
            <h1>this is your input</h1>
          <span>FirsName : {props.firstname}</span> <br />
          <span>LastName : {props.lastname}</span> <br />
          <span>Telephone : {props.telephone}</span> <br />
          <span>Role : {props.role}</span><br />
          <span>Message :{props.messsage} </span><br />
        </div>
    );
};



export default View;