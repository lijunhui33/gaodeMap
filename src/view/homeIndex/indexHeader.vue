<template>
    <div class="box">
        <div>
            <i class="Icon" :class="!isCollapse ? 'el-icon-s-fold': 'el-icon-s-unfold'" @click="headerIconHandler"></i>
        </div>
        <div class="right">
            <div style="display: flex;align-items: center;margin-right: 20px;">
                <img src="../../assets/avatar_15.png" alt="头像" class="Img" />
                <div>{{userName}}</div>
            </div>
            <ul class="ul">
                <li>个人中心</li>
                <li>设置</li>
                <li @click="logOut">退出</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isCollapse: Boolean,
    },
    methods: {
        headerIconHandler () {
            this.$emit('headerIconHandler');
        },
        logOut () {
            this.$router.push('/login');
        }
    },
    computed: {
        userName () {
            return this.$store.state.userName;
        }
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeef;
    box-sizing: border-box;
    background: white;
}
.Icon {
    font-size: 18px;
    padding-left: 15px;
    cursor: pointer;
}
.right {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Img {
    width: 30px;
    height: 30px;
    border: 1px solid #eeeeef;
    margin-right: 15px;
    border-radius: 50%;
    overflow: hidden;
}
.ul {
    width: 150px;
    background: white;
    position: absolute;
    right: 15px;
    z-index: 999;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: none;
    top: 58px;
}
.ul li {
    list-style: none;
}
.ul li {
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s;
}
.ul li:hover {
    background-color: #eeeeef;
}
.right:hover > .ul {
    display: block;
}
</style>
