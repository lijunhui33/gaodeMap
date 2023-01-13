<template>
    <!-- <div class="index-box" v-if="!hideContent">
        <div class="index-left">
            <indexMenuTop :isCollapse="isCollapse"></indexMenuTop>
            <indexMenu :isCollapse="isCollapse" />
        </div>
        <div class="index-right">
            <Header @headerIconHandler="headerIconHandler" :isCollapse="isCollapse"></Header>
            <div class="crumb-box" v-show="nowRouterName != 'welcome'">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="item in breadList" :key="item.name">{{item.meta.title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="index-content">
                <router-view></router-view>
            </div>
        </div>
    </div> -->
    <router-view></router-view>
    <!-- <div class="index-box2" v-else>
        <loginContent v-if="nowRouterName == 'login'" />
        <registerContent v-if="nowRouterName == 'register'" />
    </div> -->
</template>

<script>
// import Header from './indexHeader.vue';
// import indexMenu from './indexMenu';
// import indexMenuTop from './indexMenuTop';
// import loginContent from '@/view/loginContent/loginContent';
// import registerContent from '@/view/loginContent/registerContent';
export default {
    components: {
        // Header,
        // indexMenu,
        // indexMenuTop,
        // loginContent,
        // registerContent
    },
    data () {
        return {
            isCollapse: false,
            breadList: [],
            hideContent: false
        };
    },
    computed: {
        nowRouterName () {
            return this.$route.name;
        }
    },
    created () {
        this.breadList = this.$route.matched;
        if (this.$route.name == 'login' || this.$route.name == 'register') {
            this.hideContent = true;
        } else {
            this.hideContent = false;
        }
    },
    methods: {
        headerIconHandler () {
            this.isCollapse = !this.isCollapse;
        }
    },
    watch: {
        $route () {
            this.breadList = this.$route.matched;
            if (this.$route.name == 'login' || this.$route.name == 'register') {
                this.hideContent = true;
            } else {
                this.hideContent = false;
            }
        }
    }
}
</script>

<style scoped>
.index-box {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
}
.index-box2 {
    width: 100vw;
    height: 100vh;
}
.index-left {
    height: 100%;
    transition: 0s !important;
    background: #001525;
    overflow-y: auto;
}
.index-content {
    position: absolute;
    top: 100px;
    bottom: 20px;
    width: 96%;
    overflow: auto;
    margin-left: 2%;
}
.index-left::-webkit-scrollbar {
    width: 4px;
}
.index-left::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #808080;
}
.index-left::-moz-scrollbar {
    width: 4px;
}
.index-left::-moz-scrollbar-thumb {
    border-radius: 5px;
    background-color: #808080;
}
.el-menu {
    border-right: none !important;
}
.index-right {
    flex: 1;
    height: 100%;
    position: relative;
    background-color: #eeeeef;
}
.index-content {
    position: absolute;
    top: 100px;
    bottom: 20px;
    width: 96%;
    overflow: auto;
    margin-left: 2%;
}
.index-content::-webkit-scrollbar {
    width: 4px;
}
.index-content::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #808080;
}
.index-content::-moz-scrollbar {
    width: 4px;
}
.index-content::-moz-scrollbar-thumb {
    border-radius: 5px;
    background-color: #808080;
}
.crumb-box {
    margin-top: 14px;
    margin-left: 30px;
}
</style>
