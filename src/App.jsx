import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import AuthPage from './pages/AuthPage'
import './App.css'; 


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />}>
        </Route>
        <Route path='/authentication' element={<AuthPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
