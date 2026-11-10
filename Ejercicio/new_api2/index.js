import express from "express"
import 'dotenv/config'
import productRouter from "./routers/products.router.js"
import { dbConnection } from "./database/config.js";
import  Producto  from "./models/products.model.js"
import storeRouter from "./routers/store.router.js"
import Store from "./models/store.model.js"

class Server {
    app
    port
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.middlewares()
        this.routes()
        this.connectDB()
    }

    middlewares() {
        this.app.use(express.json())
        console.log(process.env.PORT)
    }


    routes() {

        this.app.get("", (req, res) => {
            res.send("Hola Mundo")
        })

        this.app.use("/api/products", productRouter)

        this.app.use("/api/stores", storeRouter)

    }

    async connectDB() {
        await dbConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen port " + this.port)
        })
    }
}

new Server().listen()
