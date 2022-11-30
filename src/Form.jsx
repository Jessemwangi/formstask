import React ,{useRef,useEffect,useState} from 'react';
import './Form.css';

const Form = (props) => {
    const [firstname,setfirstname] =useState();
    const [lastname,setlastname]=useState();
    const [telephone,settelephone] = useState();
    const [role,setrole]=useState()
    return (
        <form onSubmit={props.submit} onChange={props.change} >
            <div className='inputs'>
                <label htmlFor="firstname">first name</label>
                <input type="text" name="firstname" id="firstname" onChange={props.change} />
            </div>
            <div>
                <label htmlFor="lastname">last name</label>
                <input type="text" name="lastname" id="lastname" onChange={props.change} />
            </div>

            <div>
                <label htmlFor="telephone">telephone</label>
                <input type="tel" name="telephone" id="telephone" onChange={props.change} />
            </div>
            <div>
                <label htmlFor="role" onChange={props.change}>Select Role</label>
                <select name="role" id="role" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div>
                <label htmlFor="messsage"></label>
                <textarea name="messsage" id="messsage" cols="30" rows="10" onChange={props.change}>

                </textarea>
            </div>
            <button type="submit">save and send</button>
        </form>
    );
}


export default Form;