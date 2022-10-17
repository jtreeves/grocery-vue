<template>
    <ul>
        <ProductHighlight 
            v-for="product in props.products"
            :key="product.id"
            :id="product.id"
        />
    </ul>
</template>

<script setup lang="ts">
    import { ProductTally } from '@/interfaces'
    import ProductHighlight from './ProductHighlight.vue'

    const props = defineProps<{
        products: ProductTally[]
    }>()
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    }

    #cart ul {
        gap: 20px;
    }
</style>
