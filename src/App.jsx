import React, { Component, useRef, useEffect, useState } from "react";

import View from "./View";
import Popup from './Popup';

import './App.css';
import './Form.css';
import axios  from "axios";

const App = () => {

    const [note, setNote] = useState({});

    const [submitMsg, setsubmitMsg] = useState('');

    const firtname = useRef();
    const lastname = useRef();
    const phone = useRef();
    const role = useRef();
    const message = useRef();

    const [fname, setFname] = useState();
    const [showPopUp, setshowPopUp] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setsubmitMsg('Sending Data ...')

        axios
        .post('http://localhost:3001/notes',{...note})
        .then((res) =>{
            console.log(res.data);
            setsubmitMsg('Data submitted successful');
            setshowPopUp(true);
       })
       .catch((err) => {
        console.log(err)
        setsubmitMsg('An error occured ' + err)
       })
    }

    const onChangeHandler = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value,
        })
    }

    const reset = () => {
        setshowPopUp(false);
        setNote({ ...'' });

    }
    return (

        <div className="App">
            <h3>{submitMsg ? submitMsg : ''}</h3>
            {!showPopUp ?
                <div>

                    <form onSubmit={submitHandler} onChange={onChangeHandler}>
                        <div className='inputs'>
                            <label htmlFor="firstname">first name</label>
                            <input type="text" name="firstname" id="firstname" ref={firtname}  />
                        </div>
                        <div>
                            <label htmlFor="lastname">last name</label>
                            <input type="text" name="lastname" id="lastname" ref={lastname}  />
                        </div>

                        <div>
                            <label htmlFor="telephone">telephone</label>
                            <input type="tel" name="telephone" id="telephone" ref={phone}  />
                        </div>
                        <div>
                            <label htmlFor="role" ref={role}>Select Role</label>
                            <select name="role" id="role" >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="messsage"></label>
                            <textarea name="messsage" id="messsage" cols="30" rows="10" ref={message} >

                            </textarea>
                        </div>
                        <button type="submit" onSubmit={submitHandler}>save and send</button>
                    </form>

                    <View {...note} />
                </div>
                :
                <Popup {...note}
                    reset={reset}
                   />}
        </div>
    );
}


export default App;