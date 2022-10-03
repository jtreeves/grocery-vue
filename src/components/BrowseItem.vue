<template>
    <li>
        <p>{{ product.name }}</p>
        <p>{{ product.image }}</p>
        <p>${{ formatPrice(product.price) }}</p>
    </li>
</template>

<script setup lang="ts">
    import { Product } from '@/interfaces'
    import findProductById from '@/utilities/findProductById'
    import formatPrice from '@/utilities/formatPrice'

    const props = defineProps<{
        id: string
    }>()

    const product: Product = findProductById(props.id)
</script>

<style scoped>
</style>
