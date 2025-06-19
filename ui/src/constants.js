/* eslint-disable no-unused-vars */
import {
  PATH_HOME,
  PATH_TECH,
  PATH_AUTH,
  PATH_BAG,
  PATH_ORDERS,
  PATH_KICKS,
  PATH_USERS,
  PATH_ADMIN,
  PATH_ACCOUNT,
  PATH_TALKS,
  PATH_PRODUCTS,
  PATH_POLICIES,
  CONFIG,
} from './config-global'

export const BASE_URL = CONFIG.NODE_ENV === 'development' ? '' : CONFIG.SERVER_URL
//  (axios.defaults.baseURL = `http://localhost:8002`)

export const DEV_TOOLS =
  CONFIG.NODE_ENV === 'development' ? CONFIG.DEV_TOOLS : false

// file name multer
export const FILE_ = CONFIG.FILE_

// Server ROUTES
export const SERVER_URL = CONFIG.SERVER_URL

export const PRODUCTS_URL = CONFIG.PRODUCTS_URL
export const PRODUCT_DETAILS_URL = CONFIG.PRODUCT_DETAILS_URL

export const USERS_URL = CONFIG.USERS_URL
export const ACCOUNT_URL = CONFIG.ACCOUNT_URL
export const AUTH_URL = CONFIG.AUTH_URL

export const ORDERS_URL = CONFIG.ORDERS_URL

export const TECH_URL = CONFIG.TECH_URL

export const TALKS_URL = CONFIG.TALKS_URL

export const CHECKOUT_AUTH_CHECK = CONFIG.CHECKOUT_AUTH_CHECK
export const PAYPAL_URL = CONFIG.PAYPAL_URL

export const UPLOAD_URL = CONFIG.UPLOAD_URL

// Client ROUTES
export const CLIENT = {
  // @root: HOME
  HOME_URL: PATH_HOME.ROOT,
  SQUEEZE_URL: PATH_HOME.SQUEEZE,

  // @root: PRODUCTS
  PRODUCTS_URL: PATH_PRODUCTS.ROOT,
  PRODUCT_URL: PATH_PRODUCTS.PRODUCT,
  REVIEWS_URL: PATH_PRODUCTS.REVIEWS,

  // @root: TECH
  TECH_URL: PATH_TECH.ROOT,
  TECH_PAGE: PATH_TECH.PAGE,
  SEARCH: PATH_TECH.SEARCH,
  SEARCH_PAGE: PATH_TECH.SEARCH_PAGE,

  // @root: TALKS
  TALKS_URL: PATH_TALKS.ROOT,

  // @root: KICKS
  KICKS_URL: PATH_KICKS.ROOT,

  // @root: BAG
  BAG_URL: PATH_BAG.ROOT,
  SHIPPING_URL: PATH_BAG.SHIPPING,
  PAYMENT_URL: PATH_BAG.PAYMENT,
  BAGCONFIRM_URL: PATH_BAG.CONFIRM,
  AUTH_REDIRECT: PATH_BAG.AUTH_REDIRECT,

  // @root: ORDERS
  ORDERS_URL: PATH_ORDERS.ROOT,
  ORDER_URL: PATH_ORDERS.ORDER,
  HISTORY_URL: PATH_ORDERS.HISTORY,

  // @root: USERS
  USERS_URL: PATH_USERS.ROOT,

  // @root: ADMIN
  ADMIN_ORDERS_URL: PATH_ADMIN.ORDERS,
  ADMIN_USERS_URL: PATH_ADMIN.USERS,
  ADMIN_PRODUCTS_URL: PATH_ADMIN.PRODUCTS,
  ADMIN_PRODUCTS_PAGE_URL: PATH_ADMIN.PRODUCTS_PAGE,
  ADMIN_EDIT_URL: PATH_ADMIN.EDIT,
  ADMIN_EDITUSER_URL: PATH_ADMIN.EDITUSER,

  // @root: ACCOUNT
  ACCOUNT_URL: PATH_ACCOUNT.ROOT,

  // @root: AUTH
  AUTH_URL: PATH_AUTH.ROOT,
  LOGIN_URL: PATH_AUTH.LOGIN,
  LOGOUT_URL: PATH_AUTH.LOGOUT,
  REGISTER_URL: PATH_AUTH.REGISTER,
  LOGIN_REDIRECT: PATH_AUTH.LOGIN_REDIRECT,
  REGISTER_REDIRECT: PATH_AUTH.REGISTER_REDIRECT,
  FORGOT_PASSWORD: PATH_AUTH.FORGOT_PASSWORD,

  // @root: RULES
  TERMS: PATH_POLICIES.TERMS,
  PRIVACY: PATH_POLICIES.PRIVACY,

  // @root: boundary
  NOT_FOUND_URL: CONFIG.CLIENT_NOT_FOUND_URL,
}

export const BtnTitles = {
  // @root: BAG
  ADD_TO_CART: 'Add to Cart',
  ADD_TO_BAG: 'Add to Bag',

  // @root: ORDERS
  PLACE_ORDER: 'Place Order',

  // @root: ORDERSCREEN
  DELIVER: 'UPDATE TO DELIVERED',
  DELIVERED: 'DELIVERED',

  // @root: TechScreen - Search
  SEARCH: 'Search',

  // @root TolbyNavBar - SignIn
  SIGN_IN: 'Sign In',
}

export const StatusMsg = {
  // @root: OrderScreen: Deliver
  NOTEDELIVERED: 'NOT DELIVERED',
  DELIVERED: 'DELIVERED',

  // @root: OrderScreen: Payment
  NOTPAID: 'NOT PAID',
  PAID: 'PAID',
}

export const Snacks = {
  // @root EditUsersScreen: Update
  UPDATED: 'USER UPDATED',

  // @root ProductDetailsScreen: Review
  REVIEWED: 'REVIEW SUBMITTED',

  // @root ProductDetailsScreen: Add to Cart
  ADDEDCART: `ITEM ADDED TO CART`,
}

export const Types = {
  // @root: Nav
  SEARCH: 'Search Tolby.co.nz',

  // @root: TechScreen - Search
  SEARCH_RESULTS: 'Search Results for: ',
  SEARCH_RESULTS_EMPTY: 'No Search Results for: ',
}

export const Errors = {}

export const MetaTitles = {
  // @root: HomeScreen
  SQUEEZE: 'Tolby Technologies',
  HOME: 'Tolby | Home',

  // @root: ProductScreen
  PRODUCTS: 'Tolby | Products',

  // @root: TechScreen
  TECH: 'Tolby | Tech',

  // @root: TalksScreen
  TALKS: 'Tolby | Talks',

  // @root: KickScreen
  KICK: 'Tolby | Kick',

  // @root: BagScreen
  BAG: 'Tolby | Bag',

  // @root: OrderScreen
  ORDERS: 'Tolby | Order',
  CHECKOUT: 'Tolby | Checkout ',
  SHIPPING: 'Tolby | Shipping ',
  PAYMENT: 'Tolby | Payment ',
  BAGCONFIRM: 'Tolby | Confirm Order ',

  // @root: AccountScreen
  ACCOUNT: 'Tolby | Account',
  SIGNIN: 'Tolby | Sign In',
  REGISTER: 'Tolby | Register',
  FORGOT_PASSWORD: 'Tolby | Forgot Password',

  // @root: AdminScreen
  ADMIN_ORDERS: 'Admin | Orders',
  ADMIN_USERS: 'Admin | Users',
  ADMIN_PRODUCTS: 'Admin | Products',
  ADMIN_EDIT: 'Admin | Edit Product',
  ADMIN_EDITUSER: 'Admin | Edit User',
}
