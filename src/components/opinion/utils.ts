import { IOpinion, IOpinionDB, IOpinionToDB } from "../../core/types"
import { output } from "../../utils/index"

export function mapOpinion(opinion: IOpinion) {
    try {
        const opinionMap = {
            ...opinion,
            textContent: opinion.text_content,
            userId: opinion.user_id,
            productId: opinion.product_id
        } as IOpinionDB
    
        delete opinionMap.text_content
        delete opinionMap.user_id
        delete opinionMap.product_id

        return output({ok: true, data: opinionMap})
    } catch (error) {
        return output({ok:false, data:"Missing data"})
    }
}