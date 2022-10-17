<template>
    <article class="cart-item">
        <p class="math-symbol">x</p>

        <div>
            <button
                @click="topFunction"
                :class="topClass"
                :title="topHover"
            >
                {{ topText }}
            </button>

            <p>{{ props.cartTally }}</p>

            <button 
                @click="removeProductFromCart"
                :title="downHover"
            >
                -
            </button>
        </div>

        <p class="math-symbol">=</p>

        <p>{{ formattedTotal }}</p>
    </article>
</template>

<script setup lang="ts">
    import { 
        computed, 
        ComputedRef 
    } from 'vue'
    import cart from '@/store/cart'
    import stock from '@/store/stock'
    import calculateItemTotal from '@/utilities/calculateItemTotal'
    import formatCurrency from '@/utilities/formatCurrency'

    const props = defineProps<{
        id: string
        stockTally: number
        cartTally: number
    }>()

    const formattedTotal: ComputedRef<string> = computed(() => {
        const total: number = calculateItemTotal(props.id, props.cartTally)
        const formatted: string = formatCurrency(total)

        return formatted
    })

    const topText: ComputedRef<string> = computed(() => {
        return props.stockTally > 0 ? '+' : 'x'
    })

    const topHover: ComputedRef<string> = computed(() => {
        return props.stockTally > 0 ? 'INCREASE QUANTITY' : 'OUT OF STOCK'
    })

    const downHover: ComputedRef<string> = computed(() => {
        return props.cartTally === 1 ? 'DELETE FROM CART' : 'DECREASE QUANTITY'
    })

    const topClass: ComputedRef<string> = computed(() => {
        return props.stockTally > 0 ? '' : 'muted-button'
    })

    const topFunction: ComputedRef<() => void> = computed(() => {
        return props.stockTally > 0 ? addProductToCart : () => {}
    })

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
    .cart-item {
        width: 40%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .cart-item div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    button {
        height: 30px;
        width: 30px;
        border: 1px solid #41B883;
        background-color: #41B883;
        border-radius: 50%;
    }
</style>
