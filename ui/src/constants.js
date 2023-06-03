import { CONFIG } from './config-global'

export const BASE_URL =
  CONFIG.NODE_ENV === 'development' ? CONFIG.SERVER_URL : ''

export const DEV_TOOLS =
  CONFIG.NODE_ENV === 'development' ? CONFIG.DEV_TOOLS : false

export const PRODUCTS_URL = CONFIG.PRODUCTS_URL
export const PRODUCT_DETAILS_URL = CONFIG.PRODUCT_DETAILS_URL
export const USERS_URL = CONFIG.USERS_URL
export const ORDERS_URL = CONFIG.ORDERS_URL
export const TECH_URL = CONFIG.TECH_URL
export const BLOG_URL = CONFIG.BLOG_URL
export const CHECKOUT_AUTH_CHECK = CONFIG.CHECKOUT_AUTH_CHECK
export const PAYPAL_URL = CONFIG.PAYPAL_URL
export const CART_URL = CONFIG.CART_URL
