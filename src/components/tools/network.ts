import { Router } from "express"
import { storeFile } from "./controller"

const toolRouter = Router()

toolRouter.route("/upload").post(storeFile)

export default toolRouter