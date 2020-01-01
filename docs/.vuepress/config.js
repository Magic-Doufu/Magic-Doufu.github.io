module.exports = {
  plugins: ['vuepress-plugin-element-tabs','@vuepress/back-to-top'],
  title: 'Magic-Doufu\'s Blog',
  description: 'Magic-Doufu\'s Blog',
  head: [
    //['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    },
    lineNumbers: false
  },
  theme: 'thindark',
  themeConfig: {
    nav:[
      {text: '傳產工業4.0協作企劃', link: 'https://magic-doufu.github.io/Industry-4.0-Web/' },
      {text: '原文文檔', link: 'https://docs.thinger.io/' }
    ],
    sidebar:[

    ],
    sidebarDepth: 2,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': './assets/',
        '@server': './assets/Server',
        '@overview': './assets/Overview',
        '@arduino': '../assets/Arduino',
        '@sigfox': '../assets/Sigfox',
        '@linux': '../assets/Linux',
        '@coding': './assets/Coding',
        '@cloud': '../assets/Cloud',
        '@api': './assets/API'
      }
    }
  }
}