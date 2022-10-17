<template>
    <footer>
        © {{ year }}
    </footer>
</template>

<script setup lang="ts">
    const now: Date = new Date()
    const year: number = now.getFullYear()
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: center;
        padding: 50px;
        font-size: small;
        font-style: italic;
    }
</style>
