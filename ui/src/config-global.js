/* eslint-disable no-unused-vars */

/**
 * @function path - returns a concatenated string of root and sublink
 * @param {root path} root
 * @param {sublink path} sublink
 * @returns {string} - concatenated string of root and sublink
 */

function path(root, sublink) {
  return `${root}${sublink}`
}

/**
 * @constant ROOT_* - root paths
 */
const ROOT_SQUEEZE = '/'
const ROOT_HOME = '/home'
const ROOT_AUTH = '/auth'
const ROOT_ACCOUNT = '/account'
const ROOT_ADMIN = '/admin'
const ROOT_BAG = '/bag'
const ROOT_ORDERS = '/orders'
const ROOT_USERS = '/users'
const ROOT_PRODUCTS = '/products'
const ROOT_TECH = '/tech'
const ROOT_TALKS = '/talks'
const ROOT_KICKS = '/kicks'
const ROOT_POLICIES = '/policies'

/**
 * @constant CONFIG - global envs
 */

export const CONFIG = {
  // Global envs
  // SERVER_URL: import.meta.env.VITE_SERVER_URL,
  NODE_ENV: import.meta.env.VITE_NODE_ENV,
  DEV_TOOLS: import.meta.env.VITE_DEV_TOOLS,
  CLIENT_URL_DEV: import.meta.env.VITE_CLIENT_URL_DEV,

  // file name
  FILE_: import.meta.env.VITE_TOLBYTECH_IMG,

  // Server routes
  PRODUCTS_URL: '/api/v1/products',
  PRODUCT_DETAILS_URL: '/api/v1/products',
  USERS_URL: '/api/v1/users',
  ACCOUNT_URL: '/api/v1/users/account',
  AUTH_URL: '/api/v1/auth',
  BAG_URL: '/api/v1/bag',
  ORDERS_URL: '/api/v1/orders',
  TALKS_URL: '/api/v1/talks',
  TECH_URL: '/api/v1/tech',
  PAYPAL_URL: '/api/v1/config/paypal',
  UPLOAD_URL: '/api/v1/upload',

  // Tech sublinks
  CLIENT_TECH_URL: '/:pageNumber',

  // Product sublinks
  CLIENT_PRODUCT_URL: '/:id',
  CLIENT_PRODUCTS_URL: '/:id/edit',
  CLIENT_REVIEWS_URL: '/:id/reviews',
  // will be implementing in tech just for now, will be setting up a Products page later
  CLIENT_SEARCH_URL: '/search/:keyword',
  CLIENT_SEARCH_PAGE_URL: '/search/:keyword/:pageNumber',

  // Auth sublinks
  CLIENT_REGISTER_URL: '/register',
  CLIENT_LOGIN_URL: '/login',
  CLIENT_LOGOUT_URL: '/logout',
  CLIENT_LOGIN_REDIRECT: '/login?redirect=/',
  CLIENT_REGISTER_REDIRECT: '/register?redirect=/',
  CLIENT_FORGOT_PASSWORD: '/forgot-password',

  // Bag sublinks
  CLIENT_SHIPPING_URL: '/shipping',
  CLIENT_PAYMENT_URL: '/payment',
  CLIENT_BAGCONFIRM_URL: '/confirm',
  CLIENT_AUTH_REDIRECT: '/login?redirect=/bag/shipping',

  // Order sublinks
  CLIENT_ORDER_URL: '/:id',
  CLIENT_HISTORY_URL: '/history',

  // Admin sublinks
  CLIENT_ADMIN_USERS_URL: '/users',
  CLIENT_ADMIN_USER_EDIT_URL: '/users/:id/edit',
  CLIENT_ADMIN_PRODUCTS_URL: '/products',
  CLIENT_ADMIN_PRODUCTS_PAGES_URL: '/products/:pageNumber',
  CLIENT_ADMIN_PRODUCT_EDIT_URL: '/products/:id/edit',

  // Rules sublinks
  CLIENT_REGISTER_TERMS: '/terms',
  CLIENT_REGISTER_PRIVACY: '/privacy',

  CLIENT_NOT_FOUND_URL: '*',
}

export const PATH_HOME = {
  ROOT: ROOT_HOME,
  SQUEEZE: ROOT_SQUEEZE,
}

export const PATH_AUTH = {
  ROOT: ROOT_AUTH,
  LOGIN: path(ROOT_AUTH, CONFIG.CLIENT_LOGIN_URL),
  LOGOUT: path(ROOT_AUTH, CONFIG.CLIENT_LOGOUT_URL),
  REGISTER: path(ROOT_AUTH, CONFIG.CLIENT_REGISTER_URL),
  LOGIN_REDIRECT: path(ROOT_AUTH, CONFIG.CLIENT_LOGIN_REDIRECT),
  REGISTER_REDIRECT: path(ROOT_AUTH, CONFIG.CLIENT_REGISTER_REDIRECT),
  FORGOT_PASSWORD: path(ROOT_AUTH, CONFIG.CLIENT_FORGOT_PASSWORD),
}

export const PATH_ORDERS = {
  ROOT: ROOT_ORDERS,
  ORDER: path(ROOT_ORDERS, CONFIG.CLIENT_ORDER_URL),
  HISTORY: path(ROOT_ORDERS, CONFIG.CLIENT_HISTORY_URL),
}

export const PATH_BAG = {
  ROOT: ROOT_BAG,
  SHIPPING: path(ROOT_BAG, CONFIG.CLIENT_SHIPPING_URL),
  PAYMENT: path(ROOT_BAG, CONFIG.CLIENT_PAYMENT_URL),
  CONFIRM: path(ROOT_BAG, CONFIG.CLIENT_BAGCONFIRM_URL),
  AUTH_REDIRECT: path(ROOT_AUTH, CONFIG.CLIENT_AUTH_REDIRECT),
}

export const PATH_PRODUCTS = {
  ROOT: ROOT_PRODUCTS,
  PRODUCT: path(ROOT_PRODUCTS, CONFIG.CLIENT_PRODUCT_URL),
  REVIEWS: path(ROOT_PRODUCTS, CONFIG.CLIENT_REVIEWS_URL),
}

export const PATH_ADMIN = {
  ROOT: ROOT_ADMIN,
  ORDERS: path(ROOT_ADMIN, ROOT_ORDERS),
  USERS: path(ROOT_ADMIN, ROOT_USERS),
  PRODUCTS: path(ROOT_ADMIN, ROOT_PRODUCTS),
  PRODUCTS_PAGE: path(ROOT_ADMIN, CONFIG.CLIENT_ADMIN_PRODUCTS_PAGES_URL),
  EDIT: path(ROOT_ADMIN, CONFIG.CLIENT_ADMIN_PRODUCT_EDIT_URL),
  EDITUSER: path(ROOT_ADMIN, CONFIG.CLIENT_ADMIN_USER_EDIT_URL),
}

export const PATH_TECH = {
  ROOT: ROOT_TECH,
  PAGE: path(ROOT_TECH, CONFIG.CLIENT_TECH_URL),
  // will be implementing in tech just for now, will be setting up a Products page later ________
  SEARCH: path(ROOT_TECH, CONFIG.CLIENT_SEARCH_URL),
  SEARCH_PAGE: path(ROOT_TECH, CONFIG.CLIENT_SEARCH_PAGE_URL),
}

export const PATH_TALKS = {
  ROOT: ROOT_TALKS,
}

export const PATH_USERS = {
  ROOT: ROOT_USERS,
}

export const PATH_ACCOUNT = {
  ROOT: ROOT_ACCOUNT,
}

export const PATH_KICKS = {
  ROOT: ROOT_KICKS,
}

export const PATH_POLICIES = {
  ROOT: ROOT_POLICIES,
  TERMS: path(ROOT_POLICIES, CONFIG.CLIENT_REGISTER_TERMS),
  PRIVACY: path(ROOT_POLICIES, CONFIG.CLIENT_REGISTER_PRIVACY),
}
