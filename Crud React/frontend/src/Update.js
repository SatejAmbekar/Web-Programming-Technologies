import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Update() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {name,email})
        .then(resp => {
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
                <button className='btn btn-success'>Update</button>
            </tr>
        </table>
        </form>
        </div>
      );
    return element;
}

export default Update;
