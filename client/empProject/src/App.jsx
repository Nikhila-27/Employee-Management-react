import React from 'react'
import Header from './Header'
import './bootstrap.min.css'
import Footer from './Footer'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='edit' element={<Edit/>}/>

        </Routes>

      <Footer/>
    </div>
  )
}

export default App