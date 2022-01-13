import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import AuthPage from './pages/AuthPage'
import Basket from './components/Basket'
import './App.css'; 
import WelcomePage from './pages/WelcomePage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />}>
        </Route>
        <Route path='/main' element={<Principal />}>
        </Route>
        <Route path='/auth' element={<AuthPage />}>
        </Route>
        <Route path='/basket' element={<Basket />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
