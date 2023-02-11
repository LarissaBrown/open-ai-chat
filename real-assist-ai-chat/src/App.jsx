import { useState } from 'react'
import './App.css'
import MainChat from './components/MainChat'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div>
    <Navbar />
    <MainChat />
    <Sidebar />
    </div>
  )
}


export default App
