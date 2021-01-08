<template>
  <div class="container">
    <Header/>
    <div class="content">
      CONTENT
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
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
