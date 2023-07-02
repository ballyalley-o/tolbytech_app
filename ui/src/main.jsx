import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { Provider } from 'react-redux'
import { CLIENT } from './constants.js'
import store from './store.js'
import PrivateRoute from './components/PrivateRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
// @home
import HomeScreen from './screens/HomeScreen.jsx'
// @tech
import TechScreen from './screens/Tech/TechScreen.jsx'
// @talks
import TalksScreen from './screens/Talks/TalksScreen.jsx'
// @kicks
import KickScreen from './screens/Kicks/KickScreen.jsx'
// @products
import ProductDetailScreen from './screens/Products/ProductDetailScreen.jsx'
import AllProductsScreen from './screens/Products/admin/AllProductsScreen.jsx'
import EditProductsScreen from './screens/Products/admin/EditProductsScreen.jsx'
// @bag
import BagScreen from './screens/Bag/BagScreen.jsx'
import ShippingScreen from './screens/Bag/ShippingScreen.jsx'
import PaymentScreen from './screens/Bag/PaymentScreen.jsx'
import BagConfirmScreen from './screens/Bag/BagConfirmScreen.jsx'
// @orders
import OrderScreen from './screens/Orders/OrderScreen.jsx'
import AllOrdersScreen from './screens/Orders/admin/AllOrdersScreen.jsx'
import HistoryScreen from './screens/Orders/HistoryScreen.jsx'
// @auth
import LoginScreen from './screens/Auth/LoginScreen.jsx'
import RegisterScreen from './screens/Auth/RegisterScreen.jsx'
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen.jsx'
// @account
import AccountScreen from './screens/Accounts/AccountScreen.jsx'
import AllUsersScreen from './screens/Accounts/admin/AllUsersScreen.jsx'
import EditUserScreen from './screens/Accounts/admin/EditUserScreen.jsx'
// @defaults
import NotFound from './screens/defaults/NotFound.jsx'
import './assets/css/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path={CLIENT.HOME_URL} element={<HomeScreen />} />
      <Route path={CLIENT.TECH_URL} element={<TechScreen />} />
      <Route path={CLIENT.TECH_PAGE} element={<TechScreen />} />
      <Route path={CLIENT.PRODUCT_URL} element={<ProductDetailScreen />} />
      <Route path={CLIENT.TALKS_URL} element={<TalksScreen />} />
      <Route path={CLIENT.BAG_URL} element={<BagScreen />} />
      <Route path={CLIENT.KICKS_URL} element={<KickScreen />} />
      <Route path={CLIENT.LOGIN_URL} element={<LoginScreen />} />
      <Route path={CLIENT.REGISTER_URL} element={<RegisterScreen />} />
      <Route path={CLIENT.FORGOT_PASSWORD} element={<ForgotPasswordScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path={CLIENT.ORDER_URL} element={<OrderScreen />} />

        <Route path={CLIENT.HISTORY_URL} element={<HistoryScreen />} />
        <Route path={CLIENT.ACCOUNT_URL} element={<AccountScreen />} />
        <Route path={CLIENT.SHIPPING_URL} element={<ShippingScreen />} />
        <Route path={CLIENT.PAYMENT_URL} element={<PaymentScreen />} />
        <Route path={CLIENT.BAGCONFIRM_URL} element={<BagConfirmScreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path={CLIENT.ADMIN_ORDERS_URL} element={<AllOrdersScreen />} />
        <Route path={CLIENT.ADMIN_USERS_URL} element={<AllUsersScreen />} />
        <Route path={CLIENT.ADMIN_EDITUSER_URL} element={<EditUserScreen />} />
        <Route path={CLIENT.ADMIN_EDIT_URL} element={<EditProductsScreen />} />
        <Route
          path={CLIENT.ADMIN_PRODUCTS_URL}
          element={<AllProductsScreen />}
        />
        <Route
          path={CLIENT.ADMIN_PRODUCTS_PAGE_URL}
          element={<AllProductsScreen />}
        />
      </Route>
      <Route path={CLIENT.NOT_FOUND_URL} element={<NotFound />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
)
