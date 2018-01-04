<template>
  <div>
    <el-container>
      <el-header>JD_BOOKS</el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>



<script>
  export default {
    name: 'HelloWorld',
    /*
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        msg: 'Welcome to Your Vue.js App',
        tableData: Array(20).fill(item)
      }
    }*/
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 260px;
  }
</style>
