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
</style>
