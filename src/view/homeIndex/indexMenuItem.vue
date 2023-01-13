<template>
    <div>
        <div class="indexMenuItem" v-for="item in menuRoutes" :key="item.name">
            <el-menu-item :index="item.name" v-if="!item.children">
                <i class="el-icon-tickets"></i>
                <span slot="title">{{item.meta && item.meta.title ? item.meta.title : ''}}</span>
            </el-menu-item>
            <div :class="!isCollapse ? 'opens-index': 'downs-index'" v-else>
                <el-submenu :index="item.name">
                    <template slot="title">
                        <i :class=" item.meta.icon ? item.meta.icon : 'el-icon-menu'"></i>
                        <span slot="title" v-if="!isCollapse">{{item.meta && item.meta.title ? item.meta.title : ''}}</span>
                    </template>
                    <div v-for="item2 in item.children" :key="item2.name">
                        <el-menu-item :index="item2.name" v-if="!item2.children">
                            <!-- <i class="el-icon-tickets"></i> -->
                            <span slot="title">{{item2.meta && item2.meta.title ? item2.meta.title : ''}}</span>
                        </el-menu-item>
                        <index-menu-item :menuRoutes="item2.children" v-if="item.children"></index-menu-item>
                    </div>
                </el-submenu>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'indexMenuItem',
    props: {
        menuRoutes: Array,
        isCollapse: Boolean,
    }
}
</script>

<style scoped>
.indexMenuItem :deep() .is-active {
    background: rgb(1, 39, 68) !important;
    color: white !important;
}

.indexMenuItem :deep() .el-submenu__title > span {
    padding-left: 20px !important;
}

.indexMenuItem :deep() .el-menu-item {
    text-align: center;
}

.downs-index :deep() .el-submenu__icon-arrow {
    display: none;
}
</style>