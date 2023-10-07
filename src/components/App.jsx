import React, { Children } from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import {Header ,Home, Footer, About, Contact, Login, Register, Mentee, Mentor, PageNotFound} from './'

const USER_TYPES = {
  MENTEE: 'Mentee',
  MENTOR: 'Mentor',
  ADMIN: 'Admin'
}

const CURRENT_USER = USER_TYPES.ADMIN

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route 
        path="/" 
        element={<Home/>}
      ></Route>
      <Route 
        path="/about" 
        element={<About/>}
      ></Route>
      <Route 
        path="/contact" 
        element={<Contact/>}
      ></Route>
      <Route 
        path="/mentor" 
        element={<AdminAuth><Mentor/></AdminAuth>}
      ></Route>
      <Route 
        path="/mentee" 
        element={<MentorAuth><Mentee/></MentorAuth>}
      ></Route>
      <Route 
        path="/login" 
        element={<Login/>}
      ></Route>
      <Route 
        path="/register" 
        element={<Register/>}
      ></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

function MentorAuth({children}) {
  if(CURRENT_USER===USER_TYPES.MENTOR || CURRENT_USER===USER_TYPES.ADMIN){
    return (<>{children}</>)
  }
  else {
    return (<PageNotFound/>
    )
  }
}

function AdminAuth({children}) {
  if(CURRENT_USER===USER_TYPES.ADMIN)
  return (<>{children}</>)
  else 
  return (<Navigate to={"/PageNotFound"}/>)
}



export default App
