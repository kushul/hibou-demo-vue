<template>
  <Html>
    <Head>
      <Title>{{ eventName }}</Title>
      <Meta name="description" :content="`${eventDetail}`" />
      <!-- <Meta property="og:title" :content="`${eventName}`" /> -->
      <!-- <Meta property="og:site_name" :content="`${eventName}`" /> -->
      <Meta property="og:description" :content="`${eventDetail}`" />
      <Meta property="og:type" content="website" />
      <!-- <Meta property="og:image" content="/img/ogimage2.png" /> -->
      <Link
        rel="icon"
        type="image/png"
        href="https://www.lehibou.com/bundles/app/favicon/favicon.png"
      />
    </Head>
  </Html>
</template>
<script>
export default {
  props: ["eventName", "eventDetails"],

  computed: {
    eventDetail() {
      if (this.eventDetail) {
        const eventDescript = this.eventDetails.replace(/<\/?[^>]+>/gi, "");
        return eventDescript;
      }
      return "";
    },
  },
};
</script>
