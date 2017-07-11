<template>
  <div>
    <div class="footer">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/header">
            <div class="ico ico-home"></div>
            <span>首页</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/allProducts">
            <div class="ico ico-product"></div>
            <span>全部产品</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/lookAbout">
            <div class="ico ico-lookabout"></div>
            <span>闲逛</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/cart">
            <div class="ico ico-cart"></div>
            <span>购物车</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/user">
            <div class="ico ico-usercenter"></div>
            <span>账户中心</span>
          </router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from '../components/header/header.vue'
export default {
  components: {
      'ele-header':header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixins.styl"
.footer
  height: 4.5rem;
  position: fixed;
  bottom: 0;
  z-index: 900;
  width: 100%;
  background: #f8f8f8;
  border-top: .04rem solid #ddd;
  .tab
    background: #f8f8f8;
    .tab-item
      width: 20%;
      float: left;
      margin: 0 auto;
      position: relative;
      text-align: center;
      .ico
        width: 100%;
        height: 3.3rem;
        margin-bottom: .2rem;
        background-repeat no-repeat
        background-position: 50%;
        background-size: 28%;
      .ico-home
        bg-image(home)
      .ico-product
        bg-image(item)
      .ico-lookabout
        bg-image(look)
      .ico-cart
        bg-image(cart)
      .ico-usercenter
        bg-image(user)

</style>
