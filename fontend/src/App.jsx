import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Alluser from './Alluser'
import Createuser from './Createuser'
import Updateuser from './Updateuser'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Alluser/>}></Route>
        <Route path='/create' element={<Createuser/>}></Route>
        <Route path='/update/:id' element={<Updateuser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
