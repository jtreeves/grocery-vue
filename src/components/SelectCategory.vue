<template>
    <form 
        @change="emit('updateCategory', currentCategory)"
    >
        <label for="category">
            Category
        </label>

        <select 
            v-model="currentCategory"
            name="category"
        >
            <option 
                v-for="category in categories" 
                :key="category.name"
                :value="category" 
            >
                {{ category.name }}
            </option>
        </select>
    </form>
</template>

<script setup lang="ts">
    import { ref, Ref } from 'vue'
    import { Category } from '@/interfaces'
    import categories from '@/data/categories'

    const props = defineProps<{
        selectedCategory: Category
    }>()

    const emit = defineEmits<{
        (
            event: 'updateCategory',
            category: Category
        ): void
    }>()

    const currentCategory: Ref<Category> = ref(props.selectedCategory)
</script>

<style scoped>
</style>
