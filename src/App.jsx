import React from 'react'
import NavBar from './component/NavBar'
import Home from './Page/Home'
import Contact from './Page/Contact'
import Fetch from './component/Fetch'
import UseEfeect from './component/UseEfeect'
import Button from './component/Props/Button'
import {Navigate, Route, Routes} from 'react-router-dom'
import Test from './component/Test'
import About from './page/About'
import NotFound from './component/NotFound'
function App() {
  const handleEdit=()=>{
    alert("Hello" )
  }
  return (
    <>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Navigate to="/"/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about/:id" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      {/* <Fetch/> */}
      {/* <UseEfeect/> */}
      {/* <Button handleEdit={handleEdit} name="edit"  style='color:"blue",border:"1px solid blue", padding:"30px"'/>
      <Button name="delete"/> */}
      {/* <Test/> */}
    </>
  )
}

export default App