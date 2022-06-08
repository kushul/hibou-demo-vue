<template>
  <meta-tag :event-name="title" :event-details="description" />
  <home-offer-block />
  <home-services-listing />
  <home-features-block />
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
const title = "Le Hibou Demo";
const description = "Just a demo on nuxt 3";
</script>