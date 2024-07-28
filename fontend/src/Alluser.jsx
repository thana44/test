import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Alluser() {
    const [user, setUser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:7744/getall')
        .then((ans)=>{
            console.log(ans.data)
            setUser(ans.data)
        })
        .catch((e)=>console.log(e))
    },[])

    const funcdel = async(id)=>{
        await axios.delete('http://localhost:7744/delete/' + id)
        window.location.reload()
    }

  return (
    <div>
        <h1>Page All User.</h1>
        <Link to="/create"><button>Create User</button></Link>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((users, index)=>{
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{users.name}</td>
                                <td>{users.lastname}</td>
                                <td>{users.age}</td>
                                <td><Link to={`/update/${users._id}`}><button>Update</button></Link><button onClick={()=>funcdel(users._id)}>Delete</button></td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Alluser