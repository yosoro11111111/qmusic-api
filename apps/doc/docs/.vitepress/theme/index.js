import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // import method
import 'vitepress-plugin-codeblocks-fold/style/index.css'; // import style

export default {
    extends: DefaultTheme,
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();
        codeblocksFold({route, frontmatter});
    }
};