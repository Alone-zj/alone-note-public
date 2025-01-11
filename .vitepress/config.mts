import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/alone-note-public/",
  title: "Alone Note Project(title)",
  titleTemplate: "Alone Note Project",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '案例', link: '/markdown-examples' }
    ],
    // 左侧菜单栏
    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown示例', link: '/markdown-examples' },
            { text: '2501', link: '/2501/restartGpuDriver' },
          { text: 'API示例', link: '/api-examples' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
