import type { Response, Request } from "express";
import { response } from "../../network/response";
import { prisma } from "../../db/index";
import { handleResponseError } from "../../utils";
import { mapOpinion } from "./utils";
import { IOpinion } from "../../core/types";

export async function list(_req: Request, res: Response): Promise<Response> {
    try {
        const opinions = await prisma.opinion.findMany()
        return response({ok:true, res, data:opinions})
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function getById(req: Request, res: Response): Promise<Response> {
    try {
        const opinion = await prisma.opinion.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        if (!opinion) return response({ok:false, res, data:"Opinion not found", status:500})
        return response({ok:true, res, data:opinion})
    
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function store(req: Request, res: Response): Promise<Response> {
    try {
        const { ok, data } = mapOpinion(req.body as IOpinion)

        if (!ok) {
            return response({ok:false, res, data, status:500})
        }

        const newOpinion = await prisma.opinion.create({ data })

        return response({ok:true, res, data:newOpinion, status:201})
    } catch (error) {
        return handleResponseError(res, error)
    } 
}

export async function update(req: Request, res: Response): Promise<Response> {
    try {
        const opinion = await prisma.opinion.update({
            where: {
                id: Number(req.params.id)
            },
            data: {textContent: req.body.text_content}
        })

        if (!opinion) return response({ok:false, res, data:"Opinion not found", status:500})

        return response({ok:true, res, data:"Opinion updated"})
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function destroy(req: Request, res: Response): Promise<Response> {
    try {
        await prisma.opinion.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        return response({ok:true, res, data:"Opinion deleted"})
    } catch (error) {
        return handleResponseError(res, error)
    }
}