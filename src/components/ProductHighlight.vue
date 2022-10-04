<template>
    <li>
        <BrowseItem 
            v-if="browse"
            :id="props.id" 
        />
        
        <CartItem 
            v-if="cart"
            :id="props.id" 
        />
    </li>
</template>

<script setup lang="ts">
    import { 
        useRoute,
        RouteLocationNormalizedLoaded
    } from 'vue-router'
    import BrowseItem from './BrowseItem.vue'
    import CartItem from './CartItem.vue'

    const props = defineProps<{
        id: string
    }>()

    const route: RouteLocationNormalizedLoaded = useRoute()
    const browse: boolean = route.path.includes('browse')
    const cart: boolean = route.path.includes('cart')
</script>

<style scoped>
</style>
