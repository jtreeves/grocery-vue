<template>
    <form 
        @change="emit('updateCategory', currentCategory)"
    >
        <label for="category">
            Select Category
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
    form {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    label {
        font-size: small;
        font-style: italic;
    }

    select {
        border: 1px solid #41B883;
        border-radius: 3px;
        padding: 5px;
        color: #41B883;
        background-color: #34495E;
        outline: 0;
    }
</style>
