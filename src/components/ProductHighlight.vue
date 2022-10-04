<template>
    <li>
        <p>{{ product.name }}</p>
        <p>{{ product.image }}</p>
        <p>${{ formatCurrency(product.price) }}</p>

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
        Product 
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
        return stock.findProduct(props.id).tally
    })

    const cartTally: ComputedRef<number> = computed(() => {
        return cart.findProduct(props.id).tally
    })

    const product: Product = findProductById(props.id)
    const route: RouteLocationNormalizedLoaded = useRoute()
    const isBrowse: boolean = route.path.includes('browse')
    const isCart: boolean = route.path.includes('cart')
</script>

<style scoped>
</style>
