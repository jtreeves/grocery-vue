<template>
    <main id="cart">
        <h1>Cart</h1>

        <p v-if="cart.value.length === 0">
            Your shopping cart is empty! Go <RouterLink to="/browse">browse</RouterLink> our items, and stock up!
        </p>

        <section v-if="cart.value.length !== 0">
            <ProductsList 
                :products="cart.value"
            />

            <div>
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
        computed, 
        ComputedRef 
    } from 'vue'
    import { 
        useRouter,
        Router
    } from 'vue-router'
    import cart from '@/store/cart'
    import calculateTotal from '@/utilities/calculateTotal'
    import formatCurrency from '@/utilities/formatCurrency'
    import ProductsList from '@/components/ProductsList.vue'

    const router: Router = useRouter()

    const formattedTotal: ComputedRef<string> = computed(() => {
        const total: number = calculateTotal(cart.value)
        const formatted: string = formatCurrency(total)

        return formatted
    })

    function handleCheckout(): void {
        cart.reset()
        router.push('/home')
    }
</script>

<style scoped>
    a {
        color: #41B883;
        font-weight: bold;
    }

    a:hover {
        font-style: italic;
        text-decoration: underline;
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    section div {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        align-items: flex-end;
        gap: 10px;
        margin-right: 20px;
    }

    section div button {
        border: 1px solid #41B883;
        background-color: #41B883;
        border-radius: 5px;
        padding: 5px;
    }
</style>
