import findProductInCollection from '@/utilities/findProductInCollection'
import {
    reactive
} from 'vue'
import {
    Items,
    ProductTally
} from '@/interfaces'
import { 
    updateProductTally 
} from '@/utilities'

export default reactive(<Items>{
    value: [],
    findProduct(id: string): ProductTally {
        return findProductInCollection(id, this.value)
    },
    addProduct(id: string): void {
        if (!this.findProduct(id)) {
            this.value.push({
                id: id,
                tally: 1
            })
        } else {
            this.value = updateProductTally(id, true, this.value)
        }
    },
    removeProduct(id: string): void {
        this.value = updateProductTally(id, false, this.value)
    },
    reset(): void {
        this.value = []
    }
})
