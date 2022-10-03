import {
    reactive
} from 'vue'
import {
    Items,
    ProductTally
} from '@/interfaces'
import createInitialStock from '@/utilities/createInitialStock'
import findProductInCollection from '@/utilities/findProductInCollection'
import updateProductTally from '@/utilities/updateProductTally'

export default reactive(<Items>{
    value: createInitialStock(),
    findProduct(id: string): ProductTally {
        return findProductInCollection(id, this.value)
    },
    addProduct(id: string): void {
        this.value = updateProductTally(id, true, this.value)
    },
    removeProduct(id: string): void {
        this.value = updateProductTally(id, false, this.value)
    },
    reset(): void {
        this.value = createInitialStock()
    }
})
