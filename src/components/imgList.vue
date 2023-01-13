<template>
    <div>
        <div class="img-box-list">
            <div class="img-box">
                <i class="el-icon-delete-solid img-delete" @click="deletes"></i>
                <div class="img-detail">
                    <img @click="preview" src="https://img.zcool.cn/community/01cg90jomzj40ol1w7fzzp3339.gif" alt="头像" class="Img" />
                </div>
            </div>
            <div class="img-box">
                <i class="el-icon-delete-solid img-delete"></i>
                <div class="img-detail">
                    <img src="https://img.zcool.cn/community/01cg90jomzj40ol1w7fzzp3339.gif" alt="头像" class="Img" />
                </div>
            </div>
        </div>
        <el-dialog title="预览" :visible.sync="dialogVisible">
            <div class="preview-img-box">
                <img class="preview-img" src="https://img.zcool.cn/community/01cg90jomzj40ol1w7fzzp3339.gif" alt="头像" />
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible: false,
        };
    },
    methods: {
        deletes () {
            console.log('???s');
        },
        preview () {
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>
.img-box-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.img-box {
    width: 100px;
    height: 100px;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
}
.img-detail {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 3px;
    border: 1px dashed #ccc;
    cursor: pointer;
}
.Img {
    padding: 4px;
    height: 100px;
}
.img-delete {
    position: absolute;
    right: -10px;
    font-size: 20px;
    top: -10px;
    color: red;
    cursor: pointer;
    display: none;
}
.img-box:hover > .img-delete {
    display: block;
}
.preview-img-box {
    width: 100%;
    text-align: center;
}
.preview-img {
    width: 500px;
}
</style>


