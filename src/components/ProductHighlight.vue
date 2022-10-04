<template>
    <li>
        <article>
            <h2>{{ name }}</h2>
            <p>{{ image }}</p>
            <p>{{ price }}</p>
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
    import { 
        cart, 
        stock 
    } from '@/store'
    import { 
        findProductById, 
        formatCurrency 
    } from '@/utilities'
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
</script>

<style scoped>
</style>
