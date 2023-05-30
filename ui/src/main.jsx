import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import GadgetsScreen from './Screens/GadgetsScreen'
import BlogScreen from './Screens/BlogScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'
import './assets/css/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/gadget' element={<GadgetsScreen />} />
      <Route path='/products/:id' element={<ProductDetailScreen />} />
      <Route path='/blog' element={<BlogScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
