import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import HomeScreen from './screens/HomeScreen.jsx'
import TechScreen from './screens/TechScreen.jsx'
import BlogScreen from './screens/BlogScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ShippingScreen from './screens/ShippingScreen.jsx'
import NotFound from './screens/defaults/NotFound.jsx'
import './assets/css/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/tech" element={<TechScreen />} />
      <Route path="/products/:id" element={<ProductDetailScreen />} />
      <Route path="/blog" element={<BlogScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/auth" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
