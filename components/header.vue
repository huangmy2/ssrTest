<template>
  <div class="header_style">
    <img class="logo" src="./../assets/images/dqd-logo.png" alt="">
    <span class="link"><a href="/">index</a></span>
    <span class="link"><a :href="'/detail/' + id">detail</a></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id:333333
    }
  },
  mounted () {
    console.log(this.$route.path)
  }
}
</script>

<style lang="less">
.header_style{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #f4f4f4;
    .logo{
        width: 160px;
    }
    .title{
        font-size: 16px;
        font-weight: 700;
        margin: 0 20px;
    }
    .link{
      a{
        margin: 0 15px;
        color: #00d11e;
        font-weight: 600;
        text-decoration: none;
      }
    }
}
</style>
