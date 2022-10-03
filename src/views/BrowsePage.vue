<template>
    <h1>Results</h1>

    <BrowseList 
        :products="stock.value"
    />
</template>

<script setup lang="ts">
    import stock from '@/store/stock'
    import BrowseList from '@/components/BrowseList.vue'
</script>

<style scoped>
</style>
