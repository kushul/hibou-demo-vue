<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/shared/Header.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
:root {
  // Spacing
  --container-width: 1024px;
  --gap: 25px;
  --gutter: 20px;
  --gap-section: 40px;
  --gap-content: 10px;
  --gap-six: 6px;
  --gap-margin-tablet: 30px;

  // General Colors
  --color-primary: #004a8f;
  --color-bg: #f4f8fb;
  --color-text: #2b2d32;
  --color-text-light: #9b9696;
  --color-grey: var(--color-text-light);
  --color-light-grey: #e0e0e0;
  --color-light: white;
  --color-dark: black;
  --color-instagram: #d6249f;
}

#app {
  font-family: Recoleta, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
