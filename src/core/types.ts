export type category = "Hogar" | "Cocina" | "Ropa" | "Accesorios / Otros"

export interface IOpinion {
    text_content?: string
    user_id?: number
    product_id?: number
}

export interface IOpinionToDB {
    text_content?: string
}

export interface IOpinionDB extends IOpinion {
    textContent: string
    userId: number
    productId: number
}

export interface IProduct {
    name: string
    description: string
    current_price?: number
    has_discount?: boolean
    original_price?: number | null
    category: category
    opinions: IOpinion[]
    url?: string
}

export interface IProductToDB {
    name?: string
    description?: string
    current_price?: number
    has_discount?: boolean
    original_price?: number | null
    category?: category
    opinions?: IOpinion[]
    currentPrice?: number | null
    hasDiscount?: boolean
    originalPrice?: number
}

export interface IProductDB extends IProduct {
    currentPrice: number
    hasDiscount: boolean
    originalPrice?: number | null
}