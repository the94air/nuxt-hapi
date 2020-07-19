export default {
  telemetry: true,

  head: {
    title: 'This should be working on development mode',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
    ],
    css: [
      '@/css/app.css'
    ],
    plugins: [
      { src: '~/plugins/test.js' },
    ]
  },

}