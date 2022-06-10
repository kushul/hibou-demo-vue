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
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,700;1,800&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap' }]
    },
    router: {
        // https://router.vuejs.org/api/#routeroptions
        options: {},
    },
})
