<template>
  <div class="container">
    <Header/>
    <div class="content">
      <p>CONTENT</p>
      <span v-for="item in testData" :key="item.value">
        服务端接口数据：{{item.name}}:{{item.value}}
      </span>
      <p>store数据：{{$store.state.counter}}</p>
      <el-button type="primary" @click="commitStore">改变store数据</el-button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  head(){
    return{
      title:'title',
      meta: [{
        name:'keywords',
        hid:'keywords',
        content:'keywords'
      },{
        name:'description',
        hid:'description',
        content:'description'
      }]
    }
  },
  // 服务端执行
  async asyncData (ctx) {
    const {$axios,params,error} = ctx;
    let testData = {}
    let list = await $axios.$get(`/api/soccer/data/person/info/50594834`);
    testData = list && list.base_info
    return {
      testData: testData
    }
  },
  data () {
    return{
      testData:null
    }
  },
  mounted () {
    console.log(this.testData)
  },
  methods: {
    commitStore () { 
      this.$store.commit('increment', 444);  
    }
  },
  components:{ Header, Footer }
}
</script>

<style lang="less">
.container{
  width: 100%;
  .content{
    position: relative;
    width: 90%;
    margin: 2% auto;
    font-size: 30px;
    font-weight: 700;
    background: #efefef;
    min-height: 78vh;
    text-align: center;
  }
}
</style>
