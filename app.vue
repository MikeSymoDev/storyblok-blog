<template>
  <div>
    <h1>this is a test</h1>
    <pre>{{ story }}</pre>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="js">
const story = await useStoryblok('home', { version: 'draft'})
</script>
