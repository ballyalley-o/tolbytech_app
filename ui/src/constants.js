import { CONFIG } from './config-global'

export const BASE_URL =
  CONFIG.NODE_ENV === 'development' ? CONFIG.CLIENT_URL_DEV : ''

export const DEV_TOOLS =
  CONFIG.NODE_ENV === 'development' ? CONFIG.DEV_TOOLS : false

export const PRODUCTS_URL = CONFIG.PRODUCTS_URL
export const USERS_URL = CONFIG.USERS_URL
export const ORDERS_URL = CONFIG.ORDERS_URL
export const GADGETS_URL = CONFIG.GADGETS_URL
export const BLOG_URL = CONFIG.BLOG_URL
export const PAYPAL_URL = CONFIG.PAYPAL_URL
