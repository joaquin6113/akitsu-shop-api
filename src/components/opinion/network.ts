import { Router } from "express";
import * as Controller from "./controller"

const opinionRouter = Router()

opinionRouter.route("/").get(Controller.list)
opinionRouter.route("/:id").get(Controller.getById)
opinionRouter.route("/").post(Controller.store)
opinionRouter.route("/:id").put(Controller.update)
opinionRouter.route("/:id").delete(Controller.destroy)

export default opinionRouter