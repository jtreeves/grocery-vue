<template>
    <h1>Cart</h1>

    <ProductsList :products="cart.value"/>
</template>

<script setup lang="ts">
    import ProductsList from '@/components/ProductsList.vue'
    import cart from '@/store/cart'
</script>

<style scoped>
</style>
