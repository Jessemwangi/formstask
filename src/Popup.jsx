import React, {useState,useEffect} from 'react';
import axios from 'axios';

import './Form.css'
import './View.css'

const Popup = (props) => {

   const [note, setNote] = useState([]);
   const [isloading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        axios.get('http://localhost:3001/notes')
.then((res =>{

setNote(res.data);
setIsLoading(false);
}))
    },[])

    return (
        <div className='view'>
            
                        <h1>this is your input</h1>
          
            {isloading ?  <h1>loading .....</h1>: note.map((note) => 
       <div key={note.id} className='userContents'>
          <span>FirsName : {note.firstname}</span> <br />
          <span>LastName : {note.lastname}</span> <br />
          <span>Telephone : {note.telephone}</span> <br />
          <span>Role : {note.role}</span> <br />
          <span>mesaage : {note.messsage}</span><br/>
       </div>
       )}
          <button onClick={props.reset}>Ok</button>
        
        </div>
   
        
    );
};

export default Popup;