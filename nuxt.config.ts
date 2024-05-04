// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: "csrf-token", content: "{{ csrf_token() }}" }],
    },
  },
  antd: {},
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@ant-design-vue/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
