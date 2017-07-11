<template>
  <div>
    <div class="header">
      <div class="header-wrapper">
        <div class="header-ico"></div>
        <a href="/allProducts">
          <span class="head-type"></span>
        </a>
      </div>
      <div class="header-menu">
        <div class="menuProduct">
          <ul class="menuNavProduct">
            <li class="font-large selected">
              <router-link to="/#">首页</router-link>
            </li>
            <li class="font-large">
              <router-link to="/new">新品</router-link>
            </li>
            <li class="font-large">
              <a href="#">服务</a>
            </li>
            <li class="font-large">
              <a href="#">下厨</a>
            </li>
            <li class="font-large">
              <a href="#">家居服</a>
            </li>
            <li class="font-large">
              <a href="#">生活</a>
            </li>
            <li class="font-large">
              <a href="#">软装</a>
            </li>
            <li class="font-large">
              <a href="#">产品</a>
            </li>
            <li class="font-large">
              <a href="#">工作和旅行</a>
            </li>
            <li class="font-large">
              <a href="#">了解lifeVC</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
    export default{
        data () {
            return {}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: auto;
    .header-wrapper
      width: auto;
      height: 4rem;
      background: #89be48;
      .header-ico
        display: block;
        width: 100%;
        height: 4rem;
        bg-image(jiaju)
        background-repeat no-repeat
        background-size: 50%;
        background-position: 50%;
      .head-type
        width: 3.666666rem;
        height: 3.666666rem;
        display: block;
        float: right;
        position: absolute;
        z-index: 1000;
        top: 0;
        right: 0;
        background-size: 45%;
        bg-image(chanping)
        background-repeat: no-repeat;
        background-position: 50%;
    .header-menu
      position: relative;
      z-index: 1100;
      background: #fff;
      .menuProduct
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 4rem;
        overflow: hidden;
        overflow-x: scroll;
        .menuNavProduct
          width: 800px;
          position: relative;
          z-index: 1101;
          overflow: hidden;
          line-height: 4rem;
        .menuNavProduct,&>li
          box-sizing: border-box;
          height: 4rem;
          .font-large
            float: left
            width: 80px;
            text-align: center;
            border-bottom: 2px solid #ddd;
          .selected
            color: #80b532
          li>a
            height: 3.8rem;
            display: block;
            line-height: 3.8rem;
            padding: 0;
            position: relative;
            font-size: 1.35rem;
    .mint-loadmore-top
      margin-top: -50px;
      text-align: center;
      height: 50px;
      line-height: 50px;


</style>
