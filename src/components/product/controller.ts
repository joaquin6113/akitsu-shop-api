import type { Response, Request } from "express";
import { response } from "../../network/response";
import { prisma } from "../../db/index";
import { handleResponseError } from "../../utils";
import { mapForUpdate, mapProduct } from "./utils";
import { IProduct, IProductToDB } from "../../core/types";

export async function list(_req: Request, res: Response): Promise<Response> {
    try {
        const products = await prisma.product.findMany({
            include: {
                opinions: true
            }
        })
        return response({ok:true, res, data:products})
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function getById(req: Request, res: Response): Promise<Response> {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                opinions: true
            }
        })
        if (!product) return response({ok:false, res, data:"Product not found", status:500})
        return response({ok:true, res, data:product})
    
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function store(req: Request, res: Response): Promise<Response> {
    try {
        const { ok, data } = mapProduct(req.body as IProduct)

        if (!ok) {
            return response({ok:false, res, data, status:500})
        }

        console.log(data)
        const newProduct = await prisma.product.create({ data })
        console.log(data)

        return response({ok:true, res, data:newProduct, status:201})
    } catch (error) {
        console.log("hi 3")
        return handleResponseError(res, error)
    } 
}

export async function update(req: Request, res: Response): Promise<Response> {
    try {
        const data = mapForUpdate(req.body as IProductToDB) as Request
        const product = await prisma.product.update({
            where: {
                id: Number(req.params.id)
            },
            data: data
        })

        if (!product) return response({ok:false, res, data:"Product not found", status:500})

        return response({ok:true, res, data:"Product updated"})
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function destroy(req: Request, res: Response): Promise<Response> {
    try {
        await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        return response({ok:true, res, data:"Product deleted"})
    } catch (error) {
        return handleResponseError(res, error)
    }
}