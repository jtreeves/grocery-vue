<template>
    <h1>{{ selectedCategory.name }}</h1>

    <select 
        v-model="selectedCategory" 
        @change="changeProducts"
    >
        <option 
            v-for="category in categories" 
            :value="category" 
            :key="category.name"
        >
            {{ category.name }}
        </option>
    </select>

    <ProductsList 
        :products="matchingProducts"
    />
</template>

<script setup lang="ts">
    import { ref, Ref } from 'vue'
    import { Category, ProductTally } from '@/interfaces'
    import categories from '@/data/categories'
    import stock from '@/store/stock'
    import ProductsList from '@/components/ProductsList.vue'
    import findProductTalliesByCategory from '@/utilities/findProductTalliesByCategory'

    const selectedCategory: Ref<Category> = ref(categories[0])
    const matchingProducts: Ref<ProductTally[]> = ref(stock.value)

    function changeProducts(): void {
        matchingProducts.value = findProductTalliesByCategory(selectedCategory.value)
    }
</script>

<style scoped>
</style>
