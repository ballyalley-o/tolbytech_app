import dotenv from 'dotenv'
dotenv.config({ path: '../config/config.env' })

export const corsConfig = () => {
    const allowedOrigins = String(process.env.ALLOWED_ORIGINS).split(";") || []
    this.app.use(
      cors({
        origin: (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS'))
          }
        },
        credentials: true,
      })
    )
  }