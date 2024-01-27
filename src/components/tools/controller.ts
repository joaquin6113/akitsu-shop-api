import type { Request, Response } from "express"
import { response } from "../../network/response"
import { handleResponseError } from "../../utils"
import type { FileArray, UploadedFile } from "express-fileupload"
import { uploadFile } from "../../services/aws"

export async function storeFile(req: Request, res: Response) {
    try {
        if (!req.files) {
            return response({
                res,
                data: "No files were found",
                status: 400,
                ok: false,
            })
        }

        
        const { file } = req.files as FileArray
        console.log(file)
        const { location, data } = await uploadFile(file as UploadedFile)

        return response({
            res,
            data: {
                location, 
                data,
            },
            status: 201,
            ok: true,
        })
    } catch (error) {
        return handleResponseError(res, error)
    }
}