<template>
    <div class="ImgBox">
        <!-- <img src="../../assets/logo.png" alt="" class="Img" /> -->
        <span class="span" v-if="!isCollapse">雅韶先锋 </span>
    </div>
</template>

<script>
export default {
    props: {
        isCollapse: {
            type: Boolean,
            value: false,
        }
    }
}
</script>


<style scoped>
.ImgBox {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    background: #001525;
}

.Img {
    width: 30px;
    height: 30px;
}

.span {
    /* padding-left: 30px; */
    color: white;
}
</style>