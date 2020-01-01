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
  themeConfig: {
    nav:[
      {
        text: '參與專案',
        items: [
          {text: '傳產工業4.0協作企劃', link: 'https://magic-doufu.github.io/Industry-4.0-Web/' },
          {text: 'Thinger.io中文文檔', link: 'https://magic-doufu.github.io/thinger.io-docs-zh-t' }
        ]
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
  },
  configureWebpack: {
    resolve: {
      alias: {
        //'@assets': './assets/',
      }
    }
  }
}