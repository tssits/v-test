export default {
  target: 'static',
  build: {
    transpile: ['vue','vue-context'],
    extend(config, ctx) {}
  },
  css: [
    { src: 'vue-context/dist/css/vue-context.css', lang: 'css' }
  ]
}
