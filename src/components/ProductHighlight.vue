<template>
    <li :class="mainClass">
        <article class="product-details">
            <h2>{{ name }}</h2>
            <p class="product-image">{{ image }}</p>
            <p class="product-price">{{ price }}</p>
        </article>

        <BrowseItem 
            v-if="isBrowse"
            :id="props.id"
            :stock-tally="stockTally"
        />
        
        <CartItem 
            v-if="isCart"
            :id="props.id"
            :stock-tally="stockTally"
            :cart-tally="cartTally"
        />
    </li>
</template>

<script setup lang="ts">
    import { 
        useRoute,
        RouteLocationNormalizedLoaded
    } from 'vue-router'
    import { 
        computed, 
        ComputedRef 
    } from 'vue'
    import { 
        Product, 
        ProductTally 
    } from '@/interfaces'
    import cart from '@/store/cart'
    import stock from '@/store/stock'
    import findProductById from '@/utilities/findProductById'
    import formatCurrency from '@/utilities/formatCurrency'
    import BrowseItem from './BrowseItem.vue'
    import CartItem from './CartItem.vue'

    const props = defineProps<{
        id: string
    }>()

    const stockTally: ComputedRef<number> = computed(() => {
        const productInStock: ProductTally = stock.findProduct(props.id)

        return productInStock.tally
    })

    const cartTally: ComputedRef<number> = computed(() => {
        const productInCart: ProductTally = cart.findProduct(props.id)

        return productInCart ? productInCart.tally : 0
    })

    const product: Product = findProductById(props.id)
    const name: string = product.name
    const image: string = product.image
    const price: string = formatCurrency(product.price)
    const route: RouteLocationNormalizedLoaded = useRoute()
    const isBrowse: boolean = route.path.includes('browse')
    const isCart: boolean = route.path.includes('cart')
    const productClass: string = 'product-highlight'
    const stockClass: string = 'out-of-stock'
    const mainClass: string = stockTally.value > 0 ? productClass : `${productClass} ${stockClass}`
</script>

<style scoped>
    li {
        display: flex;
        justify-content: center;
        border: 5px solid #41B883;
        border-radius: 5px;
        padding: 20px;
        height: 200px;
        width: 200px;
        position: relative;
    }

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .product-image {
        font-size: 100px;
    }

    .product-price {
        font-style: italic;
    }

    #browse .out-of-stock {
        filter: grayscale(1);
    }

    #cart li {
        width: 100%;
        justify-content: space-between;
        height: 100px;
    }

    #cart .product-details {
        flex-direction: row;
        width: 50%;
    }

    #cart .product-image {
        order: -1;
    }
</style>
