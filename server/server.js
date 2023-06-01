import App from './config/server-config.js'

const app = new App()

app.connectDB()
app.start()
