<template>
    <article>
        <button 
            @click="buttonFunction"
            :title="hoverText"
            :class="buttonClass"
        >
            {{ buttonText }}
        </button>

        <div
            v-if="props.stockTally < 6 && props.stockTally > 0"
        >
            <p>
                Only {{ props.stockTally }} left in stock!
            </p>
        </div>

        <div 
            v-if="props.stockTally === 0"
        >
            <p>
                OUT OF STOCK!
            </p>
        </div>
    </article>
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

    const inStock: boolean = props.stockTally > 0
    const buttonText: string = inStock ? '+' : 'x'
    const hoverText: string = inStock ? 'ADD TO CART' : 'OUT OF STOCK'
    const buttonClass: string = inStock ? 'product-button' : 'product-button muted-button'
    const buttonFunction: () => void = inStock ? addProductToCart : () => {}
</script>

<style scoped>
</style>
