<template>
    <main>
        <h1>{{ category.name }}</h1>

        <SelectCategory 
            :selected-category="category"
            @update-category="handleCategory"
        />

        <ProductsList 
            :products="products"
        />
    </main>
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
    import { 
        categories 
    } from '@/data'
    import { 
        stock 
    } from '@/store'
    import { 
        findProductTalliesByCategory 
    } from '@/utilities'
    import SelectCategory from '@/components/SelectCategory.vue'
    import ProductsList from '@/components/ProductsList.vue'

    const category: Ref<Category> = ref(categories[0])
    const products: Ref<ProductTally[]> = ref(stock.value)

    function handleCategory(
        newCategory: Category
    ): void {
        category.value = newCategory
        products.value = findProductTalliesByCategory(newCategory)
    }
</script>

<style scoped>
</style>
