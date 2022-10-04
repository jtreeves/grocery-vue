<template>
    <h1>{{ selectedCategory.name }}</h1>

    <SelectCategory 
        :selected-category="selectedCategory"
        @update-category="changeCategoryAndProducts"
    />

    <ProductsList 
        :products="matchingProducts"
    />
</template>

<script setup lang="ts">
    import { 
        ref, 
        Ref 
    } from 'vue'
    import { 
        Category, 
        ProductTally 
    } from '@/interfaces'
    import categories from '@/data/categories'
    import stock from '@/store/stock'
    import findProductTalliesByCategory from '@/utilities/findProductTalliesByCategory'
    import SelectCategory from '@/components/SelectCategory.vue'
    import ProductsList from '@/components/ProductsList.vue'

    const selectedCategory: Ref<Category> = ref(categories[0])
    const matchingProducts: Ref<ProductTally[]> = ref(stock.value)

    function changeCategoryAndProducts(
        newCategory: Category
    ): void {
        selectedCategory.value = newCategory
        matchingProducts.value = findProductTalliesByCategory(selectedCategory.value)
    }
</script>

<style scoped>
</style>
