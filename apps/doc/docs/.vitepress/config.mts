import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import fs from "node:fs";
import path from "node:path";

// https://vitepress.dev/reference/site-config
const vitePressOptions = defineConfig({
  title: "🎵QQ音乐",
  description: "用心做音乐，用爱做产品",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'API', link: '/api/intro' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    outline:[2,3],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dingshaohua-com/qmusic-api' }
    ]
  }
})


// 获取都有哪些项目
const projectRoot = path.resolve(process.cwd());
const docsPath = path.resolve(projectRoot, 'docs');
const ignoreDir = ['.vitepress', '.DS_Store', 'index.md'];
const docs = fs.readdirSync(docsPath, { withFileTypes: true }).filter(it => {
  const isIgnore = ignoreDir.includes(it.name)
  const isFile = fs.statSync(path.resolve(it.parentPath, it.name)).isFile();
  return !isIgnore && !isFile;
});

const vitePressSidebarOptions = docs.map(it => ({
  documentRootPath: 'docs',
  scanStartPath: it.name,
  basePath: `/${it.name}/`,
  resolvePath: `/${it.name}/`,
  useTitleFromFileHeading: true,
  collapsed: true,
  rootGroupCollapsed: true,
  useFolderLinkFromSameNameSubFile: true, // 如果此值为true,则当存在与文件夹同名的子文件时,将在文件夹中创建一个链接,用于导航至该文件,而该文件不会显示在子项中。
  // folderLinkNotIncludesFileName: true,
  sortMenusByFrontmatterOrder: true, //左侧导航根据元数据order排序
}))

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));