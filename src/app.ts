import express, { type Application } from "express"
import cors from "cors"
import { productRouter, opinionRouter, userRouter, toolRouter } from "./components"
import fileUpload from "express-fileupload"
import "dotenv/config"

const app: Application = express()
app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/opinions", opinionRouter)
app.use("/api/v1/tools", toolRouter)

export default app