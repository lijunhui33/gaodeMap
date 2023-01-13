<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    },
    created () {

    },
    methods: {

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.container {
    width: 100%;
    height: 100%;
    background: white;
    overflow-y: auto;
    border-radius: 4px;
}
.container::-webkit-scrollbar {
    width: 4px;
}
.container::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #808080;
}
.container::-moz-scrollbar {
    width: 4px;
}
.container::-moz-scrollbar-thumb {
    border-radius: 5px;
    background-color: #808080;
}
.container-title {
    /* height: 80px; */
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}
.search-box {
    padding: 10px;
    display: flex;
}
.search-item {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.search-item-title {
    text-align: right;
    padding-right: 10px;
    font-size: 16px;
}
.search-item-inp {
    width: 260px !important;
}
.user-btn {
    display: flex;
    align-items: center;
    padding: 10px;
}
.user-btn-inp {
    width: 160px;
}
.table-list {
    padding: 10px;
}
/* .el-menu--collapse > div > .el-submenu > .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse
  > div
  > .el-submenu
  > .el-submenu__title
  .el-submenu__icon-arrow {
  display: none;
} */
/* el-icon-arrow-right */
.disable-vue {
    position: relative;
    pointer-events: none;
}
.pagination {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
</style>
