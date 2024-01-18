import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Home() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })
    const navidata = useNavigate();
    const handleDelete = (id) => {
      axios.delete('http://localhost:8081/delete/'+id)
        .then(res => navidata('/'))
        .catch(err => console.log(err));
    }

  return (
    <div>
      <h2>My crud app</h2>
      <Link to="/create" className='btn btn-success'>Add+</Link>
      <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </thead>
        <tbody> 
            {data.map( (d ,i) =>(
                <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                <Link to={`/update/${d.id}`} className='btn btn-primary'>Update</Link>

                    <button onClick={e => handleDelete(d.id)} className='btn btn-danger'>Delete</button>
                </td>
                </tr>
            ))}
            
        </tbody>
      </table>
    </div>
  )
}

export default Home
