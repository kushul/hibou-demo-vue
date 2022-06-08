import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/scss/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    // additionalData: '@import "@/assets/scss/main.scss"',
                },
            },
        },
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                },
            },
        },
    },
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'Hibou Demo App',
                name: 'Hibou Demo App',
                content: 'Hibou Demo App',
            },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '900' },
        ],
    },
    router: {
        // https://router.vuejs.org/api/#routeroptions
        options: {},
    },
})
