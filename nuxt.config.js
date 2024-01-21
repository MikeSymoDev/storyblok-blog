// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@storyblok/nuxt',
      { accessToken: '0CrJjPlZKYBV1hrYn5PsHgtt', apiPlugin: true },
    ],
  ],
});
