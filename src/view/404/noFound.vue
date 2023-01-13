<template>
  <div class="box">
    <div style="text-align: center;">
      <a style="font-size: 200px;">404</a>
      <br>
      <el-button type="" @click="$router.push('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  }

}
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
