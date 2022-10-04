import { Category, ProductTally } from '@/interfaces'
import stock from '@/store/stock'

function findProductTalliesByCategory(
    category: Category
): ProductTally[] {
    const foundProducts: ProductTally[] = category.products.map((
        productId: string
    ): ProductTally => {
        return stock.findProduct(productId)
    })

    return foundProducts
}

export default findProductTalliesByCategory
