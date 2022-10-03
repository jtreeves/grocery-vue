import {
    reactive
} from 'vue'
import {
    Items,
    ProductTally
} from '@/interfaces'
import createInitialStock from '@/utilities/createInitialStock'

export default reactive(<Items>{
    value: createInitialStock(),
    findProduct(id: string): ProductTally {
        return this.value.filter(product => product.id === id)[0]
    },
    addProduct(id: string): void {
        this.value.forEach(product => {
            if (product.id === id) {
                return {
                    ...product,
                    tally: product.tally + 1
                }
            } else {
                return product
            }
        })
    },
    removeProduct(id: string): void {
        this.value.forEach(product => {
            if (product.id === id) {
                return {
                    ...product,
                    tally: product.tally - 1
                }
            } else {
                return product
            }
        })
    },
    reset(): void {
        this.value = createInitialStock()
    }
})
