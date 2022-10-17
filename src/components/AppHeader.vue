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
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #41B883;
    }

    header span {
        font-family: 'Bubblegum Sans', cursive;
        color: #34495E;
        font-size: xx-large;
    }

    nav ul {
        display: flex;
        gap: 30px;
    }

    nav ul li {
        text-transform: uppercase;
    }

    nav ul li a {
        color: #34495E;
    }

    header ul li:hover {
        font-weight: bold;
    }
</style>
