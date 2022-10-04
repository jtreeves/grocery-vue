import { Product, ProductTally } from '@/interfaces'
import { products } from '@/data'

function createInitialStock(): ProductTally[] {
    const initialStock: ProductTally[] = products.map((
        product: Product
    ): ProductTally => {
        return {
            id: product.id,
            tally: Math.floor(Math.random() * 20)
        }
    })

    return initialStock
}

export default createInitialStock
