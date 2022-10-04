<template>
    <header>
        <span>Grocery</span>

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
                        Cart
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
