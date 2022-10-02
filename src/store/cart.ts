import {
    reactive
} from 'vue'
import {
    Items,
    Product
} from '@/interfaces'

export default reactive(<Items>{
    value: [],
    increment(product: Product) {
        this.value.push(product)
    },
    decrement() {
        this.value = []
    },
    reset() {
        this.value = []
    }
})
