<template>
  <meta-tag :event-name="title" :event-details="description" />
  <home-offer-block />
  <home-carousel />
  <home-services-listing />
  <home-features-block />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const title: string = "Le Hibou Demo";
const description = "Just a demo on nuxt 3";
</script>

<style lang="scss">
*,
html,
body {
  font-family: var(--font-grotesque);
}
</style>