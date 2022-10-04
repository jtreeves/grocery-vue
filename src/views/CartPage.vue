<template>
    <main>
        <h1>Cart</h1>

        <ProductsList 
            :products="cart.value"
        />

        <p>
            TOTAL: {{ formattedTotal }}
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
    import { 
        cart 
    } from '@/store'
    import { 
        calculateTotal,
        formatCurrency
    } from '@/utilities'
    import ProductsList from '@/components/ProductsList.vue'

    const router: Router = useRouter()
    const total: number = calculateTotal(cart.value)
    const formattedTotal: string = formatCurrency(total)

    function handleCheckout(): void {
        cart.reset()
        router.push('/home')
    }
</script>

<style scoped>
</style>
