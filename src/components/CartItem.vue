<template>
    <button 
        v-if="props.stockTally > 0"
        @click="addProductToCart"
    >
        +
    </button>

    <p>{{ props.cartTally }}</p>

    <button 
        v-if="props.cartTally > 0"
        @click="removeProductFromCart"
    >
        -
    </button>
</template>

<script setup lang="ts">
    import { cart, stock } from '@/store'

    const props = defineProps<{
        id: string
        stockTally: number
        cartTally: number
    }>()

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
