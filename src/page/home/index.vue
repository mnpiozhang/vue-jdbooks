<template>
  	<div class="home_container">

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="排行榜">
          <el-select v-model="form.item" placeholder="排行榜">
            <el-option
              v-for="item in item_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.category" placeholder="分类">
            <el-option
              v-for="item in category_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-select v-model="form.effectivetime" placeholder="时间">
            <el-option
              v-for="item in effectivetime_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排名范围">
          <el-input size="medium" v-model="form.top" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!--<a href="http://niubidian.top/blog/jdbooks/?item=nbs&category=novel&effectivetime=day&topnumber=3">asdfasdf</a>-->
      <el-row class="book_section"  v-for="book in booksData">
        {{ book.rank }}
        <a :href="book.url" >{{ book.name }}</a>
        <el-row class="book_img">
          <img :src="book.pic">
        </el-row>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      booksData: {},
      item_options: [{
        value: 'nbs',
        label: '新书销量榜'
      }, {
        value: 'bc',
        label: '图书热评榜'
      }, {
        value: 'nbc',
        label: '新书热评榜'
      }, {
        value: 'bs',
        label: '图书销量榜'
      }],
      category_options: [{
        value: 'children',
        label: '少儿'
      }, {
        value: 'edu',
        label: '教育'
      }, {
        value: 'novel',
        label: '小说文学'
      }, {
        value: 'manage',
        label: '经管'
      }, {
        value: 'jitang',
        label: '励志与成功'
      }, {
        value: 'socialscience',
        label: '人文社科'
      }, {
        value: 'life',
        label: '生活'
      }, {
        value: 'art',
        label: '艺术、摄影'
      }, {
        value: 'science',
        label: '科技'
      }, {
        value: 'internet',
        label: '计算机与互联网'
      }, {
        value: 'en',
        label: '英文书、港台书'
      }, {
        value: 'magazine',
        label: '杂志期刊'
      }],
      effectivetime_options: [{
        value: 'day',
        label: '最近24小时'
      }, {
        value: 'week',
        label: '最近一周'
      }, {
        value: 'month',
        label: '最近30天'
      }],
      form: {
        item:"",
        effectivetime:"",
        category:"",
        top:""
      },
    }
  },
  methods:{
    onSubmit () {
      if (this.form.item==undefined || this.form.item=="" || this.form.item==null || this.form.category==undefined || this.form.category=="" || this.form.category==null ||this.form.effectivetime==undefined || this.form.effectivetime=="" || this.form.effectivetime==null || this.form.top==undefined || this.form.top=="" || this.form.top==null ) {
        alert("有必填选项为空");
      } else {
        this.$http({
          method: 'get',
          url: 'http://niubidian.top/blog/jdbooks/',
          dataType: 'text',
          /*headers:{
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/x-www-form-urlencoded',
          },*/
          params: {
            item: this.form.item,
            category: this.form.category,
            effectivetime:this.form.effectivetime,
            topnumber:this.form.top
          },
        }).then((response) => {
          if (response.data.code==200) {
            console.log(response.data);
            this.booksData = response.data.body;
          } else {
            alert(response.data.errMsg);
          }
        }).catch((error) => {
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            console.log(error);
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
      }
    }
  }
}
</script>

<style>
  .select_section {
    line-height: 2px;
  }

  .book_section {
    font-size: 	12px;
    line-height: 24px;
    background-color: white;
    margin: 1em 0.5em 0;
  }

  .book_section a {
    color: rgb(0, 90, 90);
    text-decoration: none;
  }

  .book_img{
    margin: 0 0 0;
  }
</style>
