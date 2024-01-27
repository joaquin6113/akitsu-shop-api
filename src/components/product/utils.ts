import { IProductToDB } from './../../core/types';
import { output } from "../../utils/index"
import { IProduct, IProductDB } from "../../core/types"

export function mapProduct(product: IProduct) {
    try {
        const productMap = {
            ...product,
            currentPrice: product.current_price,
            hasDiscount: product.has_discount,
            originalPrice: product.original_price,
        } as IProductDB
    
        delete productMap.current_price
        delete productMap.has_discount
        delete productMap.original_price

        if (product.has_discount === true && !product.original_price) {
            return output({ok:false, data:"Please send an original price"})
        }

        return output({ok: true, data: productMap})
    } catch (error) {
        return output({ok:false, data:"Missing data"})
    }
}

export function mapForUpdate(update: IProductToDB) {
    try {
        const updateDB = {
            ...update
        }

        if (update.current_price) {
            updateDB.currentPrice = update.current_price
            delete updateDB.current_price
        }
        if (update.has_discount) {
            updateDB.hasDiscount = update.has_discount
            delete updateDB.has_discount
        }
        if (update.original_price) {
            updateDB.originalPrice = update.original_price
            delete updateDB.original_price
        }

        return updateDB
    } catch (error) {
        return output({ok:false, data:"Missing data"})
    }
}