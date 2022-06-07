<template>
  <div class="home">
    <OfferBlock />
    <Services />
  </div>
</template>

<script>
// @ is an alias to /src
import OfferBlock from "@/components/homepage/HomeOfferBlock.vue";
import Services from "@/components/homepage/HomeServicesListing.vue";

export default {
  name: "Home",
  components: {
    OfferBlock,
    Services,
  },
};
</script>
