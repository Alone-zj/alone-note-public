import {defineConfig} from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    base: "/alone-note-public/",
    title: "Alone Note Project(title)",
    titleTemplate: "Alone Note Project",
    description: "A VitePress Site",
    head: [
        ['link', {rel: 'icon', href: '/.vitepress/public/logo.png'}]
    ],
    lastUpdated: true,
    // https://vitepress.dev/zh/reference/default-theme-config
    themeConfig: {
        logo: '/.vitepress/public/logo.png',
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档'
                    }
                }
            }
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        nav: [
            {text: '主页', link: '/'},
            {text: '案例', link: '/markdown-examples'},
            {text: 'windowsNote', link: '/10-windows/misc'},
        ],
        outline: {
            level: 'deep',
            label: '目录',
        },
        // 左侧菜单栏
        sidebar: {
            // 当用户位于 `/指南` 目录时，会显示此侧边栏
            '/10-windows/': [
                {
                    text: 'windowsNote',
                    items: [
                        {text: '什么是windowsNote', link: '/10-windows/misc'},
                        {text: '内容', link: '/10-windows/misc'},
                        {text: '贡献者', link: '/10-windows/misc'},
                    ]
                }
            ],
            "/": {
                text: '示例',
                items: [
                    {text: 'Markdown示例', link: '/markdown-examples'},
                    {text: 'API示例', link: '/api-examples'}
                ]
            },
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Alone-zj/alone-note-public.git'}
        ]
    },
    markdown: {
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        }
    }
})
