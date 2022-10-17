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
    import { 
        computed, 
        ComputedRef 
    } from 'vue'
    import cart from '@/store/cart'
    import stock from '@/store/stock'

    const props = defineProps<{
        id: string
        stockTally: number
    }>()

    const buttonText: ComputedRef<string> = computed(() => {
        return props.stockTally > 0 ? '+' : 'x'
    })

    const hoverText: ComputedRef<string> = computed(() => {
        return props.stockTally > 0 ? 'ADD TO CART' : 'OUT OF STOCK'
    })

    const buttonClass: ComputedRef<string> = computed(() => {
        return props.stockTally > 0 ? '' : 'muted-button'
    })

    const buttonFunction: ComputedRef<() => void> = computed(() => {
        return props.stockTally > 0 ? addProductToCart : () => {}
    })
    
    function addProductToCart(): void {
        cart.addProduct(props.id)
        stock.removeProduct(props.id)
    }
</script>

<style scoped>
    article {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    article div {
        height: 100px;
        width: 100px;
        background-image: linear-gradient(
            to top right, 
            #8ed5b5 50%, 
            transparent 0
        );
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
    }

    article div p {
        transform: rotate(45deg);
        color: #34495E;
        text-align: center;
        width: 100px;
        height: 50px;
        margin-bottom: -50px;
        margin-left: -50px;
        text-transform: uppercase;
        font-size: x-small;
    }

    button {
        height: 30px;
        width: 30px;
        border: 1px solid #41B883;
        background-color: #41B883;
        border-radius: 50%;
        align-self: flex-end;
        margin: 15px;
    }
</style>
