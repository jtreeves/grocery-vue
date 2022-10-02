import {
    reactive
} from 'vue'
import {
    Items, 
    Food
} from '@/interfaces'

export default reactive(<Items>{
    value: [],
    increment(food: Food) {
        this.value.push(food)
    },
    decrement(food: Food) {
        this.value = []
    },
    reset() {
        this.value = []
    }
})
