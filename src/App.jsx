import './App.css'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Products from './pages/users/Products'
import Posts from './pages/posts/Posts'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import NotFound from './pages/Not-Found/notFound'
import ProductDetail from './pages/product-detail/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/users' element={<Products />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users/:id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/'> */}
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes >
    </>
  )
}

export default App
