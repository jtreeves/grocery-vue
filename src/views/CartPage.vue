<template>
    <main>
        <h1>Cart</h1>

        <p v-if="cart.value.length === 0">
            Your shopping cart is empty! Go <RouterLink to="/browse">browse</RouterLink> our items, and stock up!
        </p>

        <section v-if="cart.value.length !== 0">
            <ProductsList 
                :products="cart.value"
            />

            <div id="cart-checkout">
                <p>
                    TOTAL: {{ formattedTotal }}
                </p>

                <button 
                    @click="handleCheckout"
                    title="ALL PURCHASES FINAL; NO REFUNDS"
                >
                    CHECKOUT
                </button>
            </div>
        </section>
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
    const formattedTotal: string = formatCurrency(total)

    function handleCheckout(): void {
        cart.reset()
        router.push('/home')
    }
</script>

<style scoped>
</style>
