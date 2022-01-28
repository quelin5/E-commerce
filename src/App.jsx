import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import AuthPage from './pages/AuthPage'
import Basket from './components/Basket'
import BookCard from './pages/BookCard'
import './App.css'; 
import WelcomePage from './pages/WelcomePage'
import BookDetail from './pages/BookDetail'
import FavBooksList from './pages/FavBooksList'


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
        <Route path='/bookcard' element={<BookCard />}>
        </Route>
        <Route path='/bookdetail/:book' element={<BookDetail />}>
        </Route>
        <Route path='/favouriteBooks' element={<FavBooksList/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
