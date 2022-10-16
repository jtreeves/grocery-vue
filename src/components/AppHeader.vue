<template>
    <header>
        <span>Groceryz</span>

        <nav>
            <ul>
                <li>
                    <RouterLink to="/home">
                        Home
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/browse">
                        Browse
                    </RouterLink>
                </li>
                
                <li>
                    <RouterLink to="/cart">
                        Cart ({{ currentCount }})
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { 
        computed, 
        ComputedRef 
    } from 'vue'
    import cart from '@/store/cart'
    import countItemsInCart from '@/utilities/countItemsInCart'

    const currentCount: ComputedRef<number> = computed(() => {
        return countItemsInCart(cart.value)
    })
</script>

<style scoped>
</style>
