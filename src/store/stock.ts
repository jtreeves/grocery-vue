import {
    reactive
} from 'vue'
import {
    Items,
    ProductTally
} from '@/interfaces'
import { 
    createInitialStock,
    findProductInCollection,
    updateProductTally 
} from '@/utilities'

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
