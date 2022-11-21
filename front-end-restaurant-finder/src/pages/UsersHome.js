import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);
    
    //const {id} = useEffect()

    useEffect(()=>{
        loadUsers();
        console.log("Code with fun!")
    }, []);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    
    return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <Link className='btn btn-outline-primary mx-2' to={`/users/edituser/${user.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
