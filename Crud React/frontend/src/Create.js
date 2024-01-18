import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name,email})
        .then(res => {
                navigate('/');
        }).catch(err => console.log(err));
    }


    const element = 
    (
        <div>
            <form onSubmit={handleSubmit}>
        <table>
        <tr>
                <td>Name: </td>
                <td><input type='text' 
                onChange={e => setName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Email: </td>
                <td><input type='email'
                onChange={e => setEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <button className='btn btn-success'>Submit</button>
            </tr>
        </table>
        </form>
        </div>
      );
    return element;
}

export default Create
