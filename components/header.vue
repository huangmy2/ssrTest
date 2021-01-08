<template>
  <div class="header_style">
    <img class="logo" src="./../assets/images/dqd-logo.png" alt="">
    <span class="title">SSR DEMO</span>
  </div>
</template>

<script>
export default {}
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
}
</style>
