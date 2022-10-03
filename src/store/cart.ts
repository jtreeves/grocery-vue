import {
    reactive
} from 'vue'
import {
    Items,
    ProductTally
} from '@/interfaces'

export default reactive(<Items>{
    value: [],
    findProduct(id: string): ProductTally {
        return this.value.filter(product => product.id === id)[0]
    },
    addProduct(id: string): void {
        if (!this.findProduct(id)) {
            this.value.push({
                id: id,
                tally: 1
            })
        } else {
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
        }
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
        this.value = []
    }
})
