<template>
    <p v-if="props.stockTally < 6 && props.stockTally > 0">
        Only {{ props.stockTally }} left in stock!
    </p>

    <button 
        v-if="props.stockTally > 0"
        @click="addProductToCart"
    >
        Add Product to Cart
    </button>

    <p v-if="props.stockTally === 0">
        OUT OF STOCK!
    </p>
</template>

<script setup lang="ts">
    import cart from '@/store/cart'
    import stock from '@/store/stock'

    const props = defineProps<{
        id: string
        stockTally: number
    }>()

    function addProductToCart(): void {
        cart.addProduct(props.id)
        stock.removeProduct(props.id)
    }
</script>

<style scoped>
</style>
