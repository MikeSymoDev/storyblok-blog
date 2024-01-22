<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const { slug } = useRoute().params
 
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'draft' }
)
</script>


<!-- This is the old code from index.vue as a reference: -->

<!-- <template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script> -->