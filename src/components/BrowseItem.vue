<template>
    <li>
        <p>{{ product.name }}</p>
        <p>{{ product.image }}</p>
        <p>${{ formatPrice(product.price) }}</p>
        
        <p v-if="tally < 6 && tally > 0">
            Only {{ tally }} left in stock!
        </p>

        <button 
            v-if="tally > 0"
            @click="addProductToCart"
        >
            Add Product to Cart
        </button>

        <p v-if="tally === 0">
            OUT OF STOCK!
        </p>
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

    const tally: ComputedRef<number> = computed(() => {
        return stock.findProduct(props.id).tally
    })

    const product: Product = findProductById(props.id)

    function addProductToCart(): void {
        cart.addProduct(props.id)
        stock.removeProduct(props.id)
    }
</script>

<style scoped>
</style>
