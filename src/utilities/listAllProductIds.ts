import { Product } from '@/interfaces'
import { products } from '@/data'

function listAllProductIds(): string[] {
    const allProductIds: string[] = products.map((
        product: Product
    ): string => {
        return product.id
    })

    return allProductIds
}

export default listAllProductIds
