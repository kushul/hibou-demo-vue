import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom"
declare module "/Users/kushul/projects/hibou-demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}