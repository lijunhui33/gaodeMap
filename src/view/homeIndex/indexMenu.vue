<template>
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#001525" active-text-color="#ffd04b" @select="select" text-color="#fff">
        <!-- 路由封装，虽然递归渲染了，但是建议还是用一级路由，二级三级的话要手动去对应的文件添加router-link标签 -->
        <indexMenuItem :menuRoutes="menuRoutes" :isCollapse="isCollapse" v-if="menuRoutes && menuRoutes.length" />
    </el-menu>
</template>



<script>
import indexMenuItem from '@/view/homeIndex/indexMenuItem';
export default {
    components: { indexMenuItem },
    data () {
        return {
            menuRoutes: [],
            defaultActive: '',
        };
    },
    props: {
        isCollapse: {
            default: false,
            type: Boolean,
        }
    },
    created () {
        this.menuRoutes = this.$router.options.routes[0].children;
        const routeArr = [];
        // 当meta设置了isHide = true; 则不显示在路由中
        this.menuRoutes.forEach(item => {
            const obj = { ...item };
            if (item.children) {
                // console.log(item.children, '30');
                const children = [];
                item.children.forEach(item2 => {
                    if (!item2.meta.isHide) {
                        children.push({ ...item2 });
                    }
                });
                obj.children = children;
            }
            if (!item.meta.isHide) routeArr.push(obj);
        });
        this.menuRoutes = routeArr;
        if (this.$route.name) this.defaultActive = this.$route.name;
    },
    methods: {
        // 点击路由后自动递归去查找路径跳转
        select (key) {
            const routerList = this.getList(this.$router.options.routes);
            routerList.forEach(item => {
                if (item.name === key) this.$router.push(item.path);
            });
        },
        // 递归获取路由
        getList (arr) {
            let Arr = [];
            for (let i = 0; i < arr.length; i++) {
                Arr.push(arr[i]);
                if (arr[i].children && arr[i].children.length) {
                    Arr = Arr.concat(this.getList(arr[i].children));
                }
            }
            return Arr;
        },
    }
}
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>