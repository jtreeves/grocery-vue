<template>
    <main id="browse">
        <h1>Browse</h1>
        
        <SelectCategory 
            :selected-category="category"
            @update-category="handleCategory"
        />

        <h2>Viewing {{ category.name }}</h2>

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
    import categories from '@/data/categories'
    import stock from '@/store/stock'
    import findProductTalliesByCategory from '@/utilities/findProductTalliesByCategory'
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
