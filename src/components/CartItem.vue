<template>
    <li>
        <p>{{ product.name }}</p>
        <p>{{ product.image }}</p>
        <p>${{ formatPrice(product.price) }}</p>

        <button 
            v-if="stockTally > 0"
            @click="addProductToCart"
        >
            +
        </button>

        <p>{{ cartTally }}</p>

        <button 
            v-if="cartTally > 0"
            @click="removeProductFromCart"
        >
            -
        </button>
    </li>
</template>

<script setup lang="ts">
    import { computed, ComputedRef } from 'vue'
    import { Product } from '@/interfaces'
    import cart from '@/store/cart'
    import stock from '@/store/stock'
    import findProductById from '@/utilities/findProductById'
    import formatPrice from '@/utilities/formatPrice'

    const props = defineProps<{
        id: string
    }>()

    const stockTally: ComputedRef<number> = computed(() => {
        return stock.findProduct(props.id).tally
    })

    const cartTally: ComputedRef<number> = computed(() => {
        return cart.findProduct(props.id).tally
    })

    const product: Product = findProductById(props.id)

    function addProductToCart(): void {
        cart.addProduct(props.id)
        stock.removeProduct(props.id)
    }

    function removeProductFromCart(): void {
        cart.removeProduct(props.id)
        stock.addProduct(props.id)
    }
</script>

<style scoped>
</style>
