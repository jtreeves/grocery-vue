<template>
    <main>
        <h1>Cart</h1>

        <ProductsList 
            :products="cart.value"
        />

        <p>
            TOTAL: ${{ formatCurrency(total) }}
        </p>

        <button @click="handleCheckout">
            CHECKOUT
        </button>
    </main>
</template>

<script setup lang="ts">
    import { 
        useRouter,
        Router
    } from 'vue-router'
    import cart from '@/store/cart'
    import calculateTotal from '@/utilities/calculateTotal'
    import formatCurrency from '@/utilities/formatCurrency'
    import ProductsList from '@/components/ProductsList.vue'

    const router: Router = useRouter()
    const total: number = calculateTotal(cart.value)

    function handleCheckout(): void {
        cart.reset()
        router.push('/home')
    }
</script>

<style scoped>
</style>
