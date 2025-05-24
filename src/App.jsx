import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Users from './pages/users/Users'
import Posts from './pages/posts/Posts'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import NotFound from './pages/Not-Found/notFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes >
    </>
  )
}

export default App
