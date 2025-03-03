import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Createuser() {
    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [age, setAge] = useState()

    const navigate = useNavigate()

    const btnCreate = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:7744/create', {name, lastname, age})
        navigate('/')
    }


  return (
    <div>
        <h1>Page Create User.</h1>
        <form onSubmit={btnCreate}>
            <label>Name</label>
            <input type='text' placeholder='Enter your Name'onChange={(e)=>setName(e.target.value)}></input>
            <label>LastName</label>
            <input type='text' placeholder='Enter your LastName'onChange={(e)=>setLastname(e.target.value)}></input>
            <label>Age</label>
            <input type='text' placeholder='Enter your Age' onChange={(e)=>setAge(e.target.value)}></input>
            <button>Create</button>
        </form>
    </div>
  )
}

export default Createuser