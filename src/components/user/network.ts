import { Router } from "express";
import * as Controller from "./controller"

const userRouter = Router()

userRouter.route("/").get(Controller.list)
userRouter.route("/:id").get(Controller.getById)
userRouter.route("/").post(Controller.store)
userRouter.route("/:id").put(Controller.update)
userRouter.route("/:id").delete(Controller.destroy)
userRouter.route("/login").post(Controller.login)

export default userRouter