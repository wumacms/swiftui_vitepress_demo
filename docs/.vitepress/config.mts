import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    // vite config options
    server: {
      open: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/SwiftUI从入门到进阶/第1章_环境搭建与项目创建/1.1_安装Xcode_15' }
    ],

    sidebar: [
      {
        text: '快速入门',
        items: [
          { text: '第1节', link: '/SwiftUI从入门到进阶/第1章_环境搭建与项目创建/1.1_安装Xcode_15' },
          { text: '第2节', link: '/SwiftUI从入门到进阶/第1章_环境搭建与项目创建/1.2_创建第一个SwiftUI项目' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
