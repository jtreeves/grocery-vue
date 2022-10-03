<template>
    <ul>
        <BrowseItem 
            v-for="product in props.products"
            :key="product.id"
            :id="product.id"
        />
    </ul>
</template>

<script setup lang="ts">
    import { ProductTally } from '@/interfaces'
    import BrowseItem from './BrowseItem.vue'

    const props = defineProps<{
        products: ProductTally[]
    }>()
</script>

<style scoped>
</style>
