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
import RecipeDetail from './pages/recipe-detail/RecipeDetail'
import UsersDetail from './pages/users-detail/UsersDetail'
import PostsDetail from './pages/posts-detail/PostsDetail'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/users' element={<Products />} />
          <Route path='/users/:id' element={<UsersDetail />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/posts/:id' element={<PostsDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes >
    </>
  )
}

export default App
