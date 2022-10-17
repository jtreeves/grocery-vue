<template>
    <AppHeader />
    <RouterView />
    <AppFooter />
</template>

<script setup lang="ts">
    import AppHeader from '@/components/AppHeader.vue'
    import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nanum+Myeongjo:wght@400;800&family=Roboto:wght@300&display=swap');

    body, p, ul, h1, h2, h3 {
        margin: 0
    }

    body {
        font-family: 'Nanum Myeongjo', serif;
        background-color: #34495E;
        color: #41B883;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    header, footer, h1, h2, h3, .math-symbol {
        font-family: 'Roboto', sans-serif;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding: 50px 100px;
        min-height: calc(100vh - 272.5px);
    }

    button:hover {
        cursor: pointer;
    }

    .muted-button {
        filter: grayscale(1);
    }

    .muted-button:hover {
        cursor: not-allowed;
    }
</style>
